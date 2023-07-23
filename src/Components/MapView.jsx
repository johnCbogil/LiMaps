import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import collectors from "../assets/collectors.json";

export const MapView = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedLandmark, setSelectedLandmark] = React.useState(null);

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
    <div className="MapView" style={{ position: 'relative' }}>
      <Box display="flex" justifyContent="center" style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <Button variant="contained" target="_" href="https://google.com">
          Collect For Your Neighborhood!
        </Button>
      </Box>

      <Map
        mapboxAccessToken="pk.eyJ1Ijoiam9obmNib2dpbCIsImEiOiJjbGtlNDFnM2kxMzk0M3JsczNpN2RrenhoIn0.41osgqUQ7EAVlfesFgIzJg"
        initialViewState={{
          longitude: -73.906,
          latitude: 40.7128,
          zoom: 10.0,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {collectors.features.map((feature, i) => (
          <Marker
            key={i}
            longitude={Number(feature.geometry.coordinates[0])}
            latitude={Number(feature.geometry.coordinates[1])}
            onClick={() => {
              setSelectedLandmark(feature); // Set selected landmark on click
              handleOpen(); // Open the modal when a pin is clicked
            }}
          >
            <img src="src/pin.svg" />
          </Marker>
        ))}
      </Map>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {selectedLandmark && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedLandmark.properties.dropoff_sitename}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedLandmark.properties.address}
              </Typography>

              <Button onClick={handleClose}>Close</Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
