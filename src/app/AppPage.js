import React from "react";
import { Box, Grid, Typography, Container, Paper } from "@mui/material";
import Logo from "app/components/layout/Logo";
import { useNavigate } from "react-router-dom";

const AppPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ paddingX: 0 }}>
      <Box sx={{ height: "100vh", p: 3 }}>
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
          height="45vh"
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
                backgroundColor: "#f5f5f5",
              }}
              onClick={() => navigate("/introduction")}
            >
              <Typography variant="h3" fontWeight={700} gutterBottom>
                Connect
              </Typography>
              <Typography variant="h5" color="textSecondary" fontWeight={400}>
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
                opacity: 0.5,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                color="textSecondary"
                gutterBottom
              >
                Match
                <Typography variant="h5" color="textSecondary">
                  COMING SOON ...
                </Typography>
              </Typography>

              <Typography variant="h5" color="textSecondary"  fontWeight={400}>
                Find me someone to talk to
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppPage;
