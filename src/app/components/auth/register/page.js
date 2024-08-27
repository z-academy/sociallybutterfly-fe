import { Grid, Box, Typography, Stack, Button, Container } from "@mui/material";
import AuthRegister from "../authForms/AuthRegister";
import Logo from "app/components/layout/Logo";

export default function Register() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ overflowX: "hidden" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={7}
          xl={8}
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: "0.3",
            },
          }}
        >
          <Box position="relative">
            <Box px={3}>
              <Logo />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={5}
          xl={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box p={4}>
            <AuthRegister
              title="Sign up"
              subtext={
                <Typography variant="h6" color="textSecondary" mb={1}>
                  Please use your{" "}
                  <Typography
                    component={"span"}
                    variant="inherit"
                    color={"primary"}
                  >
                    edu email
                  </Typography>
                </Typography>
              }
              subtitle={
                <Stack direction="row" spacing={1} mt={3}>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                    fontWeight="400"
                  >
                    Already have an account?
                  </Typography>
                  <Button
                    variant="text"
                    href="/auth/login"
                    fontWeight="500"
                    sx={{
                      textDecoration: "none",
                      color: "primary.main",
                    }}
                  >
                    Sign In
                  </Button>
                </Stack>
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
