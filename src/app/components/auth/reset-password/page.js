import { Box, Typography, Container } from "@mui/material";
import Logo from "app/components/layout/Logo";
import AuthResetPassword from "../authForms/AuthResetPassword";

export default function ResetPassword() {
  return (
    <Container maxWidth="sm">
      <Box position="relative">
        <Box px={3}>
          <Logo />
        </Box>
      </Box>
      <Box p={4} width={300}>
        <Typography variant="h4" fontWeight="700">
          Reset your password
        </Typography>
        <Typography
          color="textSecondary"
          variant="subtitle2"
          fontWeight="400"
          mt={2}
        >
          Please enter your new password below.
        </Typography>
        <AuthResetPassword />
      </Box>
    </Container>
  );
}
