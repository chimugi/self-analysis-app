import { updateExperience } from "@/lib/actions";
import { getExperienceById } from "@/lib/getter";
import MyDatePicker from "@/ui/dashboard/date-picker";
import MyInput from "@/ui/dashboard/input";

export default async function Edit({ params }: { params: { id: string } }) {
  const id = params.id;
  const experience = await getExperienceById(id);
  return (
    <form action={updateExperience}>
      <input id="id" name="id" type="hidden" value={id} />
      <MyInput id="title" defaultValue={experience?.title} />
      <MyInput id="experience" defaultValue={experience?.experience} />
      <MyInput id="positivePoint" defaultValue={experience?.positivePoint} />
      <MyInput id="negativePoint" defaultValue={experience?.negativePoint} />
      <MyDatePicker id="startDate" defaultValue={experience?.startDate} />
      <MyDatePicker id="endDate" defaultValue={experience?.endDate} />
      <button type="submit"> Submit </button>
    </form>
  );
}