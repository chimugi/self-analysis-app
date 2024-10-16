'use client';
import { useRouter } from 'next/navigation';
import MyDatePicker from './date-picker';
import MyInput from './input';

type ColumnBase<T> = {
  defaultValue?: T;
  required?: boolean;
};

export type NumberInputColumn = ColumnBase<number> & {
  name: string;
  type: 'number';
  min?: number;
  max?: number;
};

export type TextInputColumn = ColumnBase<string> & {
  name: string;
  type: 'text';
};

type DatePickerColumn = ColumnBase<Date> & {
  name: 'eventDate' | 'startDate' | 'endDate';
  type: 'date-picker';
};

type Column = NumberInputColumn | TextInputColumn | DatePickerColumn;

export default function MyForm({
  columns,
  onSubmit,
  cancelRedirectTo
}: {
  columns: Column[];
  onSubmit: (formData: FormData) => Promise<void>;
  cancelRedirectTo: string;
}) {
  const router = useRouter();
  const goBack = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(cancelRedirectTo);
  };

  return (
    <form action={onSubmit} className="bg-white mx-6 p-6 rounded shadow-md">
      {columns.map((col) => {
        if (col.type === 'number' || col.type === 'text') {
          return <MyInput key={col.name} col={col} />;
        } else if (col.type === 'date-picker') {
          return <MyDatePicker key={col.name} id={col.name} defaultValue={col.defaultValue} />;
        }
        return null;
      })}
      <div className="grid grid-cols-2 gap-2 w-full mt-4">
        <button onClick={goBack} className="bg-gray-300 py-2 px-4 rounded-md text-sm font-medium text-black">
          Cancel
        </button>
        <button type="submit" className="bg-indigo-600 py-2 px-4 rounded-md text-sm font-medium text-white">
          Submit
        </button>
      </div>
    </form>
  );
}
