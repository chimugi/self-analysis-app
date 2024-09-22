import MyDatePicker from "./date-picker";
import MyInput from "./input";

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
  name: 'startDate' | 'endDate';
  type: 'date-picker';
  defaultValue?: Date;
};

type Column = InputColumn | DatePickerColumn | IdColumn;

export default function MyForm({ columns, onSubmit }: {
  columns: Column[],
  onSubmit: (formData: FormData) => Promise<void>,
}) {
  const id = columns.find((col) => col.type === 'id')?.defaultValue;
  return (
    <form action={onSubmit}>
      {/* TODO: fix interface for id */}
      {id && <input id="id" name="id" type="hidden" value={id} />}
      {columns.map((col) => {
        if (col.type === 'input') {
          return <MyInput key={col.name} id={col.name} defaultValue={col.defaultValue} />;
        } else if (col.type === 'date-picker') {
          return <MyDatePicker key={col.name} id={col.name} defaultValue={col.defaultValue} />;
        }
        return null;
      })}
      <button type="submit"> Submit </button>
    </form>
  );
};
