import { updateResume } from "@/lib/actions";
import { getResumeById } from "@/lib/getter";
import MyForm from "@/ui/dashboard/form";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = params.id;
  const resume = await getResumeById(id);

  return (
    <MyForm columns={[
      { type: 'id', defaultValue: id },
      { name: 'belongsTo', type: 'input', defaultValue: resume?.belongsTo },
      { name: 'startDate', type: 'date-picker', defaultValue: resume?.startDate },
      { name: 'endDate', type: 'date-picker', defaultValue: resume?.endDate },
    ]} onSubmit={updateResume} />
  );
}