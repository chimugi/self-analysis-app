import ExperiencesTable from "@/ui/dashboard/experiences/table";
import TitleBar from "@/ui/dashboard/titile-bar";

export default function Experiences() {
  const titleActions = [{
    title: 'Add',
    action: '/dashboard/experiences/add',
  }];

  return (
    <>
      <TitleBar title="Experiences" actions={titleActions} />
      <ExperiencesTable />
    </>
  );
}