import Link from "next/link";

export default function TitleBar({ title, actions }: {
  title: string;
  actions?: {
    title: string;
    // TODO: Convert string type to path patter.
    // TODO: Add function type.
    action: string;
  }[];
}) {
  return (
    <div className="flex flex-row m-6">
      <div className="items-left text-3xl">
        {title}
      </div>
      <div className="ml-auto">
        {actions?.map(action => {
          if (typeof action.action === 'string') {
            return (
              <Link key={action.title}
                href={action.action}
                className="px-6 py-2 mx-2 w-full rounded-lg shadow-md text-2xl bg-blue-100 hover:bg-sky-100">
                {action.title}
              </Link>
            );
          } else {
            // TODO: Add function type.
          }
        })}
      </div>
    </div>
  );
}