"use client";

import { Grid, Box, Typography, Container } from "@mui/material";
import Logo from "app/components/layout/Logo";
import AuthForgotPassword from "../authForms/AuthForgotPassword";

export default function ForgotPassword() {
  return (
    <Container maxWidth="sm">
      <Box position="relative">
        <Box px={3}>
          <Logo />
        </Box>
      </Box>
      <Box p={4}>
        <Typography variant="h4" fontWeight="700">
          Forgot your password?
        </Typography>

        <Typography
          color="textSecondary"
          variant="subtitle2"
          fontWeight="400"
          mt={2}
        >
          Please enter your email address and we will send you a link to reset
          your password.
        </Typography>
        <AuthForgotPassword />
      </Box>
    </Container>
  );
}
