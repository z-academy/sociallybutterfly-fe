import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BannerContent from "./BannerContent";

const Banner = () => {

  return (
    <Box my={4} sx={{ overflow: "hidden" }}>
      <Container maxWidth="lg">
        <BannerContent />
      </Container>
    </Box>
  );
};

export default Banner;
