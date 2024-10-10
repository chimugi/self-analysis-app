import { Button } from "@mui/material";

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
              <Button key={action.title}
                href={action.action}
                variant='contained'
                className="px-6 py-2 w-full rounded-lg shadow-md text-xl">
                {action.title}
              </Button>
            );
          } else {
            // TODO: Add function type.
          }
        })}
      </div>
    </div>
  );
}