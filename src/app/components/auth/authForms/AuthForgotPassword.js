import { useState } from 'react';
import { Button, Stack, Alert, Typography } from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import { supabase } from '@/utils/supabase'; 
import { ERROR_MESSAGES } from '@/utils/errorCodes';

export default function AuthForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError('');
    setSuccess('');

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
      <Stack mt={4} spacing={2} component="form" onSubmit={handleForgotPassword}>
        <CustomFormLabel htmlFor="reset-email">Email Address</CustomFormLabel>
        <CustomTextField
          id="reset-email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail((e.target as HTMLInputElement).value)}
          required
        />
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ my: 2 }}>
            <Typography variant='body1' color="black">{success}</Typography>
          </Alert>
        )}
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Forgot Password
        </Button>
        <Button
          color="primary"
          size="large"
          fullWidth
          component={Link}
          href="/auth/login"
        >
          Back to Login
        </Button>
      </Stack>
    </>
  );
}
