import { addExperience } from "@/lib/actions";
import MyForm from "@/ui/dashboard/form";
import TitleBar from "@/ui/dashboard/titile-bar";

export default function Add() {
  return (
    <>
      <TitleBar title="Add Experience" />
      <MyForm columns={[
        { name: 'title', type: 'text', required: true },
        { name: 'experience', type: 'text', required: true },
        { name: 'positivePoint', type: 'number', required: true, min: 0, max: 10 },
        { name: 'negativePoint', type: 'number', required: true, min: 0, max: 10 },
        { name: 'eventDate', type: 'date-picker', required: true },
      ]} onSubmit={addExperience} cancelRedirectTo="/dashboard/experiences"/>
    </>
  );
}