'use client';
import MyDatePicker from "./date-picker";
import MyInput from "./input";
import { useRouter } from "next/navigation";

type IdColumn = {
  type: 'id';
  defaultValue?: string;
};

type InputColumn = {
  name: string;
  type: 'input';
  defaultValue?: string | number;
};

type DatePickerColumn = {
  name: 'eventDate' | 'startDate' | 'endDate';
  type: 'date-picker';
  defaultValue?: Date;
};

type Column = InputColumn | DatePickerColumn | IdColumn;

export default function MyForm({ columns, onSubmit, cancelRedirectTo }: {
  columns: Column[],
  onSubmit: (formData: FormData) => Promise<void>,
  cancelRedirectTo: string,
}) {
  const router = useRouter();
  const goBack = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(cancelRedirectTo);
  }

  return (
    <form action={onSubmit}
      className="bg-white mx-6 p-6 rounded-lg shadow-md">
      {columns.map((col) => {
        if (col.type === 'input') {
          return <MyInput key={col.name} id={col.name} defaultValue={col.defaultValue} />;
        } else if (col.type === 'date-picker') {
          return <MyDatePicker key={col.name} id={col.name} defaultValue={col.defaultValue} />;
        }
        return null;
      })}
      <div className="grid grid-cols-2 gap-2 w-full mt-4">
        <button onClick={goBack}
          className="bg-gray-300 py-2 px-4 rounded-md text-sm font-medium text-black">
          Cancel
        </button>
        <button type="submit"
          className="bg-indigo-600 py-2 px-4 rounded-md text-sm font-medium text-white">
            Submit
        </button>
      </div>
    </form>
  );
};
