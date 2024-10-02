import { getExperiences } from "@/lib/getter";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteAction from "../delete-action";
import { deleteExperience } from "@/lib/actions";

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
            <TableCell>Event Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {experiences.map((experience, index) => (
            <TableRow key={index}>
              <TableCell>{experience.title}</TableCell>
              <TableCell>{experience.experience}</TableCell>
              <TableCell>{experience.positivePoint}</TableCell>
              <TableCell>{experience.negativePoint}</TableCell>
              <TableCell>{experience.eventDate.toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="contained" href={`/dashboard/experiences/${experience.experienceId}/edit`}>
                  Edit
                </Button>
                <DeleteAction id={experience.experienceId} action={deleteExperience}>
                  title: {experience.title}
                </DeleteAction>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};