import { addExperience } from "@/lib/actions";
import MyForm from "@/ui/dashboard/form";

export default function Add() {
  return (
    <MyForm columns={[
      { name: 'title', type: 'input' },
      { name: 'experience', type: 'input' },
      { name: 'positivePoint', type: 'input' },
      { name: 'negativePoint', type: 'input' },
      { name: 'eventDate', type: 'date-picker' },
    ]} onSubmit={addExperience} />
  );
}