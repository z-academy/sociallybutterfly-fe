import { Grid, Box, Typography, Stack, Button, Container } from "@mui/material";
import AuthRegister from "../authForms/AuthRegister";
import Logo from "app/components/layout/Logo";

export default function Register() {
  return (
    <Container maxWidth="sm">
      <Box pt={3}>
        <Box px={3}>
          <Logo />
        </Box>
      </Box>
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
            <Stack direction="row" spacing={1} mt={3} alignItems="center">
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
    </Container>
  );
}
