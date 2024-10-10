import { updateResume } from "@/lib/actions";
import { getResumeById } from "@/lib/getter";
import MyForm from "@/ui/dashboard/form";
import TitleBar from "@/ui/dashboard/titile-bar";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = params.id;
  const resume = await getResumeById(id);

  const handleSubmit = async (formData: FormData) => {
    'use server';
    updateResume(formData, id);

    // TODO: Acutually, I should move these to the updateResume function.
    revalidatePath('/dashboard/resumes');
    redirect('/dashboard/resumes');
  }

  return (
    <>
      <TitleBar title="Edit Resume" />
      <MyForm columns={[
        { name: 'belongsTo', type: 'input', defaultValue: resume?.belongsTo },
        { name: 'startDate', type: 'date-picker', defaultValue: resume?.startDate },
        { name: 'endDate', type: 'date-picker', defaultValue: resume?.endDate },
      ]} onSubmit={handleSubmit} cancelRedirectTo="/dashboard/resumes" />
    </>
  );
}