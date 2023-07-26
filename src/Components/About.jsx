import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const About = () => {
  return (
    <div className="About">
      <Container
        sx={{
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Typography variant="h2">JuiceDrop</Typography>
        <Typography variant="body1" gutterBottom>
          Join to find battery disposal at your doorstep.
        </Typography>
        <Box m={4}></Box>
        <Typography variant="h6">About</Typography>
        <Typography variant="body1" gutterBottom>
          JuiceDrop mobilizes neighbors and households to recycle more
          batteries. We find a place for everything and do it together to create
          less waste - neighbors who compost, recycle, reuse are the people who
          treat our city more like a home.
        </Typography>
        <Box m={4}></Box>
        <Typography variant="h6">FAQ</Typography>
        <Typography variant="body1" gutterBottom>
          The information available is intended for recycling the most commonly
          purchases batteries.
        </Typography>
        <Box m={4}></Box>
        <Typography variant="body1" gutterBottom>
          How to handle:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" gutterBottom>
              Place non-conductive tape (e.g. electrical tape) over the
              battery’s terminals.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              Place in a plastic bag.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" gutterBottom>
          Types of batteries:
        </Typography>

        <ul>
          <li>
            <Typography variant="body1" gutterBottom>
              Single Use Batteries
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Alkaline, lithium, silver oxide, zinc-air, zinc-carbon, and
                  zinc-chloride, commonly known as AA, AAA, 9V, D-cell, and
                  button cell are all types of primary batteries.
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              Rechargeable Batteries
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Nickel Cadmium batteries are used for cordless power tools,
                  two-way radios, cordless phones, digital cameras.
                </Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              Lithium Ion Batteries
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Batteries for high drain devices. Cell phone, laptops,
                  e-cigarettes, toys, tablets, small devices.
                </Typography>
              </li>
            </ul>
          </li>
        </ul>
        <Box m={4}></Box>
        <Typography variant="h6">Disclaimer</Typography>
        <Typography variant="body1" gutterBottom>
          The information provided on this website is for general informational
          purposes only and does not constitute professional advice. Battery
          recycling and e-waste management involve inherent risks. Users are
          encouraged to follow local regulations and seek professional advice
          for personalized guidance. We are not liable for any damages or losses
          resulting from the use of this website or the recycling of batteries
          and e-waste.
        </Typography>
      </Container>
    </div>
  );
};
