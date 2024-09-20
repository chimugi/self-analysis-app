import { getResumes } from "@/lib/getter";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default async function ResumesTable() {
  // TODO: Implement the table to remove type assertion.
  const resumes = await getResumes() as {
    id: string;
    belongsTo: string;
    startDate: string;
    endDate: string;
  }[];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Belongs To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resumes.map((resume, index) => (
            <TableRow key={index}>
              <TableCell>{new Date(resume.startDate).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(resume.endDate).toLocaleDateString()}</TableCell>
              <TableCell>{resume.belongsTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};