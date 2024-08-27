import { useState } from "react";
import { Button, Stack, Alert, Typography, TextField } from "@mui/material";
import { supabase } from "utils/supabase";
import { ERROR_MESSAGES } from "utils/errorCodes";

export default function AuthForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(ERROR_MESSAGES.RESET_EMAIL_SENT);
    }
  };

  return (
    <>
      <Stack
        mt={4}
        spacing={2}
        component="form"
        onSubmit={handleForgotPassword}
      >
        <Typography variant="h6">Email Address</Typography>
        <TextField
          id="reset-email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ my: 2 }}>
            <Typography variant="body1" color="black">
              {success}
            </Typography>
          </Alert>
        )}
        <Button
          color="secondary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Forgot Password
        </Button>
        <Button
          color="secondary"
          size="large"
          fullWidth
          variant="text"
          href="/auth/login"
        >
          Back to Login
        </Button>
      </Stack>
    </>
  );
}
