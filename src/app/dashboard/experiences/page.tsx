import ExperiencesTable from "@/ui/dashboard/experiences/table";
import { Button } from "@mui/material";

export default function Experiences() {
  return (
    <div>
      <div>
        <span> Experiences </span>
        <Button variant="contained" href="/dashboard/experiences/add">
          Add
        </Button>
      </div>
      <ExperiencesTable />
    </div>
  );
}