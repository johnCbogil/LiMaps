import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const About = () => {
  return (
    <div className="About">
      <Container>
        <Typography variant="h2" gutterBottom>
        JuiceDrop
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here's some text for my component. This is just an example. You can
          replace it with any text.
        </Typography>
      </Container>
    </div>
  );
};
