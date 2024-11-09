import React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";

const ConfirmModal = ({ open, onClose, onConfirm, title, description }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          sx={{ fontWeight: "lg", mb: 1 }}
        >
          {title}
        </Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          {description}
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} variant="outlined" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="solid">
            Confirm
          </Button>
        </Box>
      </Sheet>
    </Modal>
  );
};

export default ConfirmModal;
