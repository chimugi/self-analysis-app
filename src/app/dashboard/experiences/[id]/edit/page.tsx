import { updateExperience } from "@/lib/actions";
import { getExperienceById, getResumes } from "@/lib/getter";
import MyForm from "@/ui/dashboard/form";
import MyTable from "@/ui/dashboard/table";
import TitleBar from "@/ui/dashboard/titile-bar";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = params.id;
  const experience = await getExperienceById(id);
  const resumes = await getResumes();

  const handleSubmit = async (formData: FormData) => {
    'use server';
    updateExperience(formData, id);

    // TODO: Acutually, I should move these to the updateExperience function.
    revalidatePath('/dashboard/experiences');
    redirect('/dashboard/experiences');
  }

  return (
    <>
      <TitleBar title="Edit Experience" />
      <div className="flex flex-row">
        <div className="w-1/2">
          <MyForm columns={[
            { name: 'title', type: 'text', defaultValue: experience?.title, required: true },
            { name: 'experience', type: 'text', defaultValue: experience?.experience },
            { name: 'positivePoint', type: 'number', defaultValue: experience?.positivePoint, required: true, min: 0, max:10 },
            { name: 'negativePoint', type: 'number', defaultValue: experience?.negativePoint, required: true, min: 0, max:10 },
            { name: 'eventDate', type: 'date-picker', defaultValue: experience?.eventDate, required: true },
          ]} onSubmit={handleSubmit} cancelRedirectTo="/dashboard/experiences" />
        </div>
        <div className="w-1/2">
          <MyTable
            id="resumeId"
            columns={['startDate', 'endDate', 'belongsTo']}
            dataSource={resumes}
            />
        </div>
      </div></>
  );
}