import { addResume } from "@/lib/actions";
import MyForm from "@/ui/dashboard/form";
import TitleBar from "@/ui/dashboard/titile-bar";

export default function Add() {
  return (
    <>
      <TitleBar title="Add Resume" />
      <MyForm columns={[
        { name: 'belongsTo', type: 'input' },
        { name: 'startDate', type: 'date-picker' },
        { name: 'endDate', type: 'date-picker' },
      ]} onSubmit={addResume} cancelRedirectTo="/dashboard/resumes" />
    </>
  );
}