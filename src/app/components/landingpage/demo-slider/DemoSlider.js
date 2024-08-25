import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DemoTitle from "./DemoTitle";

const DemoSlider = () => {
  return (
    <Box
      id="demos"
      pb={6}
      overflow="hidden"
      sx={{
        pt: {
          sm: "60px",
          lg: "60px",
        },
      }}
    >
      <Container maxWidth="lg">
        <DemoTitle />
      </Container>
    </Box>
  );
};

export default DemoSlider;
