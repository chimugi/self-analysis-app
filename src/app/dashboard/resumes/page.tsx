import ResumesTable from "@/ui/dashboard/resumes/table";
import TitleBar from "@/ui/dashboard/titile-bar";

export default function Resumes() {
  const titleActions = [{
    title: 'Add',
    action: '/dashboard/resumes/add',
  }];

  return (
    <>
      <TitleBar title="Resumes" actions={titleActions} />
      <ResumesTable />
    </>
  );
}