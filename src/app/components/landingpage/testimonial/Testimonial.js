import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import TestimonialTitle from "./TestimonialTitle";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <Box py={8}>
      <Container maxWidth="lg">
        <TestimonialTitle />
      </Container>
    </Box>
  );
};

export default Testimonial;
