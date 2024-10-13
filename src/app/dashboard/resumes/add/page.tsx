import { addResume } from "@/lib/actions";
import MyForm from "@/ui/dashboard/form";
import TitleBar from "@/ui/dashboard/titile-bar";

export default function Add() {
  return (
    <>
      <TitleBar title="Add Resume" />
      <MyForm columns={[
        { name: 'belongsTo', type: 'text', required: true },
        { name: 'startDate', type: 'date-picker', required: true },
        { name: 'endDate', type: 'date-picker', required: true },
      ]} onSubmit={addResume} cancelRedirectTo="/dashboard/resumes" />
    </>
  );
}