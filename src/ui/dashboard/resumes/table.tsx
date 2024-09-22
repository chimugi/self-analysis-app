import { getResumes } from "@/lib/getter";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default async function ResumesTable() {
  // TODO: Implement the table to remove type assertion.
  const resumes = await getResumes();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Belongs To</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resumes.map((resume, index) => (
            <TableRow key={index}>
              <TableCell>{resume.startDate.toLocaleDateString()}</TableCell>
              <TableCell>{resume.endDate.toLocaleDateString()}</TableCell>
              <TableCell>{resume.belongsTo}</TableCell>
              <TableCell>
                <Button variant="contained" href={`/dashboard/resumes/${resume.id}/edit`}>
                  Edit
                </Button>
                <Button variant="contained" href={`/dashboard/resumes/${resume.id}/delete`}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};