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
    <form action={onSubmit} className="mx-6 rounded bg-white p-6 shadow-md">
      {columns.map((col) => {
        if (col.type === 'number' || col.type === 'text') {
          return <MyInput key={col.name} col={col} />;
        } else if (col.type === 'date-picker') {
          return <MyDatePicker key={col.name} id={col.name} defaultValue={col.defaultValue} />;
        }
        return null;
      })}
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <button onClick={goBack} className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-black">
          Cancel
        </button>
        <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
          Submit
        </button>
      </div>
    </form>
  );
}
