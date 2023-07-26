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

//   collectors.forEach(function(item) {
//     console.log(`Latitude: ${item.Latitude}, Longitude: ${item.Longitude}`);
// });

  return (
    <div className="MapView" style={{ position: 'relative' }}>
      <Box display="flex" justifyContent="center" style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <Button variant="contained" target="_" href="https://h7vwjmp5b9u.typeform.com/to/fJrJBaBF">
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
        {collectors.map((feature, i) => (
          <Marker
            key={i}
            longitude={feature.Longitude}
            latitude={feature.Latitude}
            onClick={() => {
              setSelectedLandmark(feature); // Set selected landmark on click
              handleOpen(); // Open the modal when a pin is clicked
            }}
          >
            <img src="/pin.svg" />
          </Marker>
        ))}
      </Map>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {selectedLandmark && (
            <>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                {selectedLandmark.SiteName}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                Address
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedLandmark.SiteAddr}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                Items Accepted
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedLandmark["Accepted Recycleables"]}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                Hours
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedLandmark["Available Hours"]}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedLandmark["See Site for More Options"]}
              </Typography>

              <Button onClick={handleClose}>Close</Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
