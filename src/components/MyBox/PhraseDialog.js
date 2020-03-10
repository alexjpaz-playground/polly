import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function PhraseDialog({ open, handleClose }) {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
    </Dialog>
  );
}
