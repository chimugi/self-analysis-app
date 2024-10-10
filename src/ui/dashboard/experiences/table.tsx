import { getExperiences } from "@/lib/getter";
import MyTable from "../table";
import { deleteExperience } from "@/lib/actions";

export default async function ExperiencesTable() {
  const experiences = await getExperiences();
  return (
    <MyTable
      id='experienceId'
      columns={['title', 'experience', 'positivePoint', 'negativePoint', 'eventDate']}
      dataSource={experiences}
      editAction={
        {
          title: 'Edit',
          action: (id: string) => `/dashboard/experiences/${id}/edit`
        }
      }
      deleteAction={
        {
          target: 'title',
          action: deleteExperience
        }
      }
    />
  );
};