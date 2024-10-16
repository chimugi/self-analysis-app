import { deleteResume } from "@/lib/actions";
import { getResumes } from "@/lib/getter";
import MyTable from "../table";

export default async function ResumesTable() {
  const resumes = await getResumes();

  return (
    <MyTable
      id='resumeId'
      columns={['startDate', 'endDate', 'belongsTo']}
      dataSource={resumes}
      editAction={
        {
          title: 'Edit',
          action: (id: string) => `/dashboard/resumes/${id}/edit`
        }
      }
      deleteAction={
        {
          target: 'belongsTo',
          action: deleteResume
        }
      }
    />
  );
};