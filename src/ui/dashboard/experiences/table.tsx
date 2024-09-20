import { getExperiences } from "@/lib/getter";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default async function ExperiencesTable() {
  const experiences = await getExperiences();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Experience</TableCell>
            <TableCell>Positive Points</TableCell>
            <TableCell>Negative Points</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {experiences.map((experience, index) => (
            <TableRow key={index}>
              <TableCell>{experience.title}</TableCell>
              <TableCell>{experience.experience}</TableCell>
              <TableCell>{experience.positivePoint}</TableCell>
              <TableCell>{experience.negativePoint}</TableCell>
              <TableCell>{new Date(experience.startDate).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(experience.endDate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};