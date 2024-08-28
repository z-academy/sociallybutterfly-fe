import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const cardData = [
  {
    title: "Target Users",
    headline: "Students, Educators, and Professionals",
    content:
      "Tailored for those facing challenges in traditional networking, especially from underrepresented groups, Z Academy fosters valuable connections for personal and professional growth.",
  },
  {
    title: "The Challenge",
    headline: "Overcoming Networking Barriers",
    content:
      "Many struggle with social anxiety and unfamiliarity in large networking events, leading to missed opportunities for collaboration, mentorship, and career advancement.",
  },
  {
    title: "Our Solution",
    headline: "AI-Powered Networking for All",
    content:
      "Z Academy offers an AI-driven platform creating equitable networking opportunities, with tiered plans for institutions and corporations offering advanced insights and customized experiences.",
  },
];

const DemoTitle = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 6 } }}>
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Card sx={{ height: "100%", boxShadow: "none" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="primary"
                  gutterBottom
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="h2"
                  color="secondary"
                  sx={{
                    height: {
                      xs: 120,
                      sm: 100,
                    },
                  }}
                >
                  {card.headline}
                </Typography>
                <Typography variant="body1">{card.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DemoTitle;
