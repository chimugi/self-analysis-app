import { addResume } from "@/lib/actions";
import MyForm from "@/ui/dashboard/form";

export default function Add() {
  return (
    <MyForm columns={[
      { name: 'belongsTo', type: 'input' },
      { name: 'startDate', type: 'date-picker' },
      { name: 'endDate', type: 'date-picker' },
    ]} onSubmit={addResume} />
  );
}