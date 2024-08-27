import { PASSWORD_MIN_LENGTH } from "./constants";


export const ERROR_CODES = {
  LIMIT_REACHED: 429,
  TIMEOUT: 504,
};

export const AUTHENTICATED = 'authenticated';

export const AUTH_MESSAGE = {
  CONFIRM_EMAIL: "Please check your email to confirm your registration.",
  ALREADY_REGISTERED: "You are already registered. Please sign in.",
  RESET_SUCCESS: "Your password has been reset successfully, please sign in.",
};

export const ERROR_MESSAGES = {
  // EMAIL
  EMAIL_REQUIRED: 'Email is required.',
  INVALID_EMAIL_DOMAIN: 'Email domain must edu.',
  INVALID_EMAIL_FORMAT: 'Invalid email format.',
  EMAIL_LIMIT_REACHED: 'You have reached a limit for sending mail. Please try again 3 minutes later.',

  // PASSWORD
  PASSWORDS_REQUIRED: 'Password is required.',
  PASSWORD_RESET_FAILED: 'Password reset failed. Please try again.',
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match.',
  PASSWORD_MIN_LENGTH: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`,
  
  // AUTH
  NAME_REQUIRED: 'Name is required.',
  INCORRECT_USERNAME_OR_PASSWORD: 'Incorrect username or password.',
  SERVER_RESPONSE_TIMEOUT: 'The server is taking too long to respond. Please try again later.',
  RESET_EMAIL_SENT: 'Password reset email sent. Please check your inbox.',

  // ERROR_MESSAGES
  INCORRECT_CREDS: 'Invalid login credentials',
};
