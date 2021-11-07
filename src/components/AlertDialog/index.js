import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ open, onConfirm, onCancel }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmar pagamento?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Uma vez confirmado não será possível voltar atrás.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="secondary">
            Cancelar
          </Button>
          <Button onClick={onConfirm} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
