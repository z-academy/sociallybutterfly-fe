import { Box, Typography, Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/system";
import { supabase } from 'utils/supabase';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SUBDOMAIN_REGEX, EMAIL_REGEX, PASSWORD_MIN_LENGTH } from "utils/constants";
import { ERROR_MESSAGES, ERROR_CODES, AUTH_MESSAGE } from "utils/errorCodes";

const AuthRegister = ({ title, subtitle, subtext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [generalError, setGeneralError] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);
    setGeneralError(null);
    setConfirmationMessage(null);

    let hasError = false;
    if (!name) {
      setNameError(ERROR_MESSAGES.NAME_REQUIRED);
      hasError = true;
    }

    if (!email) {
      setEmailError(ERROR_MESSAGES.EMAIL_REQUIRED);
      hasError = true;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError(ERROR_MESSAGES.INVALID_EMAIL_FORMAT);
      hasError = true;
    } else if (!SUBDOMAIN_REGEX.test(email)) {
      setEmailError(ERROR_MESSAGES.INVALID_EMAIL_DOMAIN);
      hasError = true;
    }

    if (!password) {
      setPasswordError(ERROR_MESSAGES.PASSWORDS_REQUIRED);
      hasError = true;
    } else if (password.length < PASSWORD_MIN_LENGTH) {
      setPasswordError(ERROR_MESSAGES.PASSWORD_MIN_LENGTH);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
        },
        emailRedirectTo: `${window.location.origin}/auth/login`,
      },
    });

    setIsSubmitting(false);

    if (error) {
      if (error.status === ERROR_CODES.LIMIT_REACHED) {
        setGeneralError(ERROR_MESSAGES.EMAIL_LIMIT_REACHED);
      } else if (error.status === ERROR_CODES.TIMEOUT) {
        setGeneralError(ERROR_MESSAGES.SERVER_RESPONSE_TIMEOUT);
      } else {
        setGeneralError(error.message);
      }
    } else {
      const message = data?.user?.role === "authenticated"
        ? AUTH_MESSAGE.CONFIRM_EMAIL
        : AUTH_MESSAGE.ALREADY_REGISTERED;
      setConfirmationMessage(message);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {title && (
        <Typography fontWeight="500" variant="h4" mb={1}>
          {title}
        </Typography>
      )}

      {subtext}

      <Box component="form" onSubmit={handleSignUp} height={450} width="auto">
        <Stack mb={3}>
          <Typography variant="body1" component="label" htmlFor="name" mb={1}>Name</Typography>
          <TextField
            id="name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(nameError)}
            helperText={nameError}
          />
          <Typography variant="body1" component="label" htmlFor="email" mb={1} mt={2}>Email Address</Typography>
          <TextField
            id="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <Typography variant="body1" component="label" htmlFor="password" mb={1} mt={2}>Password</Typography>
          <TextField
            id="password"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility sx={{ fontSize: 20 }} /> : <VisibilityOff sx={{ fontSize: 20 }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Box>
          {generalError && (
            <Typography color="error" variant="body1" mb={2}>
              {generalError}
            </Typography>
          )}
        </Box>
        {confirmationMessage && (
          <Typography color="primary" variant="body1" mb={2}>
            {confirmationMessage}
          </Typography>
        )}
        <Button
          color="secondary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
        {subtitle}
      </Box>
    </>
  );
};

export default AuthRegister;
