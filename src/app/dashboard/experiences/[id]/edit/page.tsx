import { updateExperience } from "@/lib/actions";
import { getExperienceById } from "@/lib/getter";
import MyForm from "@/ui/dashboard/form";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = params.id;
  const experience = await getExperienceById(id);

  return (
    <MyForm columns={[
      { type: 'id', defaultValue: id },
      { name: 'title', type: 'input', defaultValue: experience?.title },
      { name: 'experience', type: 'input', defaultValue: experience?.experience },
      { name: 'positivePoint', type: 'input', defaultValue: experience?.positivePoint },
      { name: 'negativePoint', type: 'input', defaultValue: experience?.negativePoint },
      { name: 'eventDate', type: 'date-picker', defaultValue: experience?.eventDate },
    ]} onSubmit={updateExperience} />
  );
}