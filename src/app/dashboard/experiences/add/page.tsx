import { addExperience } from "@/lib/actions";
import MyForm from "@/ui/dashboard/form";
import TitleBar from "@/ui/dashboard/titile-bar";

export default function Add() {
  return (
    <>
      <TitleBar title="Add Experience" />
      <MyForm columns={[
        { name: 'title', type: 'input' },
        { name: 'experience', type: 'input' },
        { name: 'positivePoint', type: 'input' },
        { name: 'negativePoint', type: 'input' },
        { name: 'eventDate', type: 'date-picker' },
      ]} onSubmit={addExperience} cancelRedirectTo="/dashboard/experiences"/>
    </>
  );
}