import ResumesTable from "@/ui/dashboard/resumes/table";
import { Button } from "@mui/material";

export default function Resumes() {
  return (
    <div>
      <div>
        <span> Resumes </span>
        <Button variant="contained" href="/dashboard/resumes/add">
          Add
        </Button>
      </div>
      <ResumesTable />
    </div>
  );
}