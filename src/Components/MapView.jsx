import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export const MapView = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="MapView">
      <Box display="flex" justifyContent="center">
        <Button variant="contained" target="_" href="https://google.com">
          Collect For Your Neighborhood!
        </Button>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 id="modal-modal-title">Text in a modal</h2>
            <p id="modal-modal-description">
              Here is the content for your modal.
            </p>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close Modal
            </Button>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};
