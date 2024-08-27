import { useState, useEffect } from 'react';
import { Button, Stack, Alert, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { supabase } from 'utils/supabase';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AUTH_MESSAGE, ERROR_MESSAGES } from "utils/errorCodes";

export default function AuthResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Parse the hash fragment to get error details
    const hash = window.location.hash.substring(1); // Remove the leading '#'
    const params = new URLSearchParams(hash);

    const errorParam = params.get('error');
    if (errorParam && errorParam === 'access_denied') {
      setError('The reset link is invalid or has expired. Please request a new password reset.');
      setTimeout(() => {
        navigate('/auth/forgot-password');
      }, 3000);
    }
  }, [navigate]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError(ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(AUTH_MESSAGE.RESET_SUCCESS);
      setTimeout(() => {
        navigate('/auth/login');
      }, 3000);
    }
  };

  const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Stack mt={4} spacing={2} component="form" onSubmit={handleResetPassword}>
      <Typography variant="h6" component="label" htmlFor="new-password">New Password</Typography>
      <TextField
        id="new-password"
        variant="outlined"
        fullWidth
        type={showNewPassword ? 'text' : 'password'}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle new password visibility"
                onClick={handleClickShowNewPassword}
                edge="end"
              >
                {showNewPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography variant="h6" component="label" htmlFor="confirm-password">Confirm Password</Typography>
      <TextField
        id="confirm-password"
        variant="outlined"
        fullWidth
        type={showConfirmPassword ? 'text' : 'password'}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={handleClickShowConfirmPassword}
                edge="end"
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
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
        color="secondary"
        variant="contained"
        size="large"
        fullWidth
        type="submit"
      >
        Reset Password
      </Button>
    </Stack>
  );
}
