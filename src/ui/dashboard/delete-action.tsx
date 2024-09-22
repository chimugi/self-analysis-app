'use client';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function DeleteAction(
  { id, action, children }: {
    id: string;
    action: (id: string) => Promise<void>;
    children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  const handleAction = () => {
    action(id);
    setOpen(false); 
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} inert={!open}>
        <DialogTitle> Are you Sure? </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone.
            Are you sure you want to delete this item?
            { children }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Cancel </Button>
          <Button onClick={handleAction}> Delete </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}