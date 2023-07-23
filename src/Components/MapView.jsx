import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapView = () => {
  const landmarks = [
    { name: 'Statue of Liberty', coordinates: { latitude: 40.6892, longitude: -74.0445 } },
    { name: 'Central Park', coordinates: { latitude: 40.7851, longitude: -73.9683 } },
    { name: 'Times Square', coordinates: { latitude: 40.7589, longitude: -73.9851 } },
  ];
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
    <Map
        mapboxAccessToken="pk.eyJ1Ijoiam9obmNib2dpbCIsImEiOiJjbGtlNDFnM2kxMzk0M3JsczNpN2RrenhoIn0.41osgqUQ7EAVlfesFgIzJg"
        initialViewState={{
          longitude: -73.9060,
          latitude: 40.7128,
          zoom: 10.0,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
            {landmarks.map((landmark, i) => (
        <Marker
          key={i}
          longitude={landmark.coordinates.longitude}
          latitude={landmark.coordinates.latitude}
          onClick={() => setSelectedLandmark(landmark)} // Set selected landmark on click
        >
      <img src="src/pin.svg" />
        </Marker>
      ))}
      </Map>
      {/* <Box display="flex" justifyContent="center">
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
      </Box> */}
    </div>
  );
};
