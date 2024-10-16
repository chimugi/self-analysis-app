import { addExperience } from "@/lib/actions";
import { getResumes } from "@/lib/getter";
import MyForm from "@/ui/dashboard/form";
import MyTable from "@/ui/dashboard/table";
import TitleBar from "@/ui/dashboard/titile-bar";

export default async function Add() {
  const resumes = await getResumes();
  return (
    <>
      <TitleBar title="Add Experience" />
      <div className="flex flex-row">
        <div className="w-1/2">
          <MyForm columns={[
            { name: 'title', type: 'text', required: true },
            { name: 'experience', type: 'text' },
            { name: 'positivePoint', type: 'number', required: true, min: 0, max: 10 },
            { name: 'negativePoint', type: 'number', required: true, min: 0, max: 10 },
            { name: 'eventDate', type: 'date-picker', required: true },
          ]} onSubmit={addExperience} cancelRedirectTo="/dashboard/experiences"/>
        </div>
        <div className="w-1/2">
          <MyTable
            id="resumeId"
            columns={['startDate', 'endDate', 'belongsTo']}
            dataSource={resumes}
            />
        </div>
      </div>
    </>
  );
}