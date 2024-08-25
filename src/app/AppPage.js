import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import Logo from "app/components/layout/Logo";

const AppPage = () => {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#f5f5f5", p: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Logo />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        textAlign="left"
        mb={2}
        height="55vh"
      >
        <Typography variant="h1" fontWeight={700} mb={1} fontFamily="Inter">
          Less small talk, more connections
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" fontSize={20}>
          How would you like to form new connections today?
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            elevation={0}
            sx={{
              height: "15vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: { xs: 2, sm: 4 },
              borderRadius: 2,
              textAlign: "left",
            }}
          >
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Connect
            </Typography>
            <Typography variant="body1" color="textSecondary">
              I have a partner in front of me
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={0}
            sx={{
              height: "15vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: { xs: 2, sm: 4 },
              borderRadius: 2,
              textAlign: "left",
              opacity: 0.6
            }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              color="textSecondary"
              gutterBottom
            >
              Match
              <Typography variant="body1" color="textSecondary">
              COMING SOON
            </Typography>
            </Typography>
            
            <Typography variant="body1" color="textSecondary">
              Find me someone to talk to
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppPage;
