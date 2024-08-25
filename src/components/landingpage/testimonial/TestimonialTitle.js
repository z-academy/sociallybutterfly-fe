import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "icon-park-outline:circular-connection",
    title: "Ice-Breaking",
    description: "Facilitate initial conversations with personalized ice-breaking questions that reduce the awkwardness and anxiety often associated with networking."
  },
  {
    icon: "fluent:handshake-16-filled",
    title: "Matching",
    description: "Utilize an intelligent matching algorithm to connect individuals based on shared interests, goals, and other relevant criteria."
  },
  {
    icon: "gridicons:chat",
    title: "Voice vs. Chat",
    description: "Evaluate the effectiveness of voice interactions versus chat-based communication to determine which format enhances the networking experience."
  }
];

const TestimonialTitle = () => {
  return (
    <Grid container spacing={3} justifyContent="center" pb={3}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          fontWeight={700}
          textAlign="center"
          sx={{
            fontSize: {
              lg: "36px",
              xs: "25px",
            },
            lineHeight: {
              lg: "43px",
              xs: "30px",
            },
            mb: 8,
            mx: { md: 0, xs: 3 },
          }}
        >
          Core Features
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="center"
          mb={2}
          sx={{
            mx: { md: 0, xs: 3 },
          }}
        >
          {features.map((feature, index) => (
            <Stack key={index} direction="column" alignItems="center" spacing={4}>
              <Icon icon={feature.icon} width={68} color="secondary.main" />
              <Typography variant="h2" color="primary" fontWeight={700}>
                {feature.title}
              </Typography>
              <Typography variant="h6" color="textSecondary" fontWeight={500} textAlign="center">
                {feature.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TestimonialTitle;
