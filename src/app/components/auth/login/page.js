import { Grid, Box, Stack, Typography, Container, Button } from "@mui/material";
import Logo from "app/components/layout/Logo";
import AuthLogin from "../authForms/AuthLogin";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box pt={3}>
        <Box px={3}>
          <Logo />
        </Box>
      </Box>
      <Box p={4}>
        <AuthLogin
          title="Sign in"
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
                color="secondary.main"
                variant="body1"
                fontWeight="500"
              >
                New to OfCoursely?
              </Typography>
              <Button
                variant="text"
                href="/auth/register"
                fontWeight="500"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                }}
              >
                Create an account
              </Button>
            </Stack>
          }
        />
      </Box>
    </Container>
  );
}
