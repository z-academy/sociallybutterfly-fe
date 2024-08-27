import {
  Box,
  Typography,
  InputAdornment,
  Alert,
  Button,
  Stack,
  IconButton,
  CircularProgress,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { supabase } from "utils/supabase";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SUBDOMAIN_REGEX, EMAIL_REGEX, PASSWORD_MIN_LENGTH } from "utils/constants";
import { ERROR_MESSAGES } from "utils/errorCodes";

const AuthLogin = ({ title, subtitle, subtext }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [generalError, setGeneralError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) setEmailError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(null);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailError(null);
    setPasswordError(null);
    setGeneralError(null);

    let hasError = false;
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
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setGeneralError(
        error.message === ERROR_MESSAGES.INCORRECT_CREDS
          ? ERROR_MESSAGES.INCORRECT_USERNAME_OR_PASSWORD
          : error.message
      );
    } else {
      navigate("/app"); 
    }
    setLoading(false);
  };

  return (
    <>
      {title && (
        <Typography fontWeight="500" variant="h4" mb={2}>
          {title}
        </Typography>
      )}

      {subtext}

      <Stack component="form" onSubmit={handleSubmit} spacing={2} height="auto">
        <Box>
          {generalError && (
            <Alert severity="error" sx={{ marginTop: 2 }}>
              <Typography variant="body1">{generalError}</Typography>
            </Alert>
          )}
          <Typography variant="body1" component="label" htmlFor="email" mb={1}>
            Email
          </Typography>
          <TextField
            id="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <Typography variant="body1" component="label" htmlFor="password" mb={1} mt={2}>
            Password
          </Typography>
          <TextField
            id="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
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
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          sx={{ pt: 2 }}
        >
          <Typography
            component={Link}
            to="/auth/forgot-password"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "secondary.main",
            }}
          >
            Forgot Password?
          </Typography>
        </Stack>
        <Box>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            Sign In
          </Button>
        </Box>
        {subtitle}
      </Stack>
    </>
  );
};

export default AuthLogin;
