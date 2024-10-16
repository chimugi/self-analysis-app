import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { convertToPascalCaseWithSpaces } from "@/lib/util";
import DeleteAction from "./delete-action";

export default function MyTable({ id, columns, dataSource, editAction, deleteAction }: {
  id: string;
  columns: string[];
  dataSource: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
  editAction?: {
    title: string;
    action: (id: string) => string;
  };
  deleteAction?: {
    target: string;
    action: (id: string) => Promise<void>;
  };
}) {
  return (
    <div className="flex flex-row mx-6">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index}>{convertToPascalCaseWithSpaces(column)}</TableCell>
              ))}
              {(() => {
                if (editAction || deleteAction) {
                  return <TableCell>Actions</TableCell>
                }
              })()}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column, index) => {
                  if (row[column] instanceof Date) {
                    return <TableCell key={index}>{row[column].toLocaleDateString()}</TableCell>;
                  } else {
                    return <TableCell key={index}>{row[column]}</TableCell>;
                  }
                })}
                { (editAction || deleteAction) && (
                  <TableCell className="flex flex-row">
                    {editAction && (
                      <Button variant='outlined' href={editAction.action(row[id])}
                        className="px-2">
                        {editAction.title}
                      </Button>
                    )}
                    {deleteAction && (
                      <div className="px-2">
                        <DeleteAction id={row[id]} action={deleteAction.action}>
                          target: {row[deleteAction.target]}
                        </DeleteAction>
                      </div>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}