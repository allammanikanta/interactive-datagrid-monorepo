import { Alert, AlertColor, Snackbar } from "@mui/material";
import React from "react";

interface SnackbarNotifierProps {
  open: boolean;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  onClose: () => void;
}

const SnackbarNotifier = ({
  open,
  message,
  severity = "warning",
  autoHideDuration = 5000,
  onClose,
}: SnackbarNotifierProps) => (
  <Snackbar
    open={open}
    autoHideDuration={autoHideDuration}
    onClose={onClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
  >
    <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>
);

export default React.memo(SnackbarNotifier);
