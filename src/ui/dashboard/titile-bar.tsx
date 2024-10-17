import { Button } from '@mui/material';

export default function TitleBar({
  title,
  actions
}: {
  title: string;
  actions?: {
    title: string;
    // TODO: Convert string type to path patter.
    // TODO: Add function type.
    action: string;
  }[];
}) {
  return (
    <div className="m-6 flex flex-row">
      <div className="text-left text-3xl">{title}</div>
      <div className="ml-auto">
        {actions?.map((action) => {
          if (typeof action.action === 'string') {
            return (
              <Button
                key={action.title}
                href={action.action}
                variant="contained"
                className="w-full rounded-lg px-6 py-2 text-xl shadow-md"
              >
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
