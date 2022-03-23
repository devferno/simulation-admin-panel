import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { blue } from "@mui/material/colors";

export default function SimpleSnackbar({ open, handleClose }) {
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        sx={{ background: blue[600] }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Email Send Success"
        action={action}
      />
    </div>
  );
}
