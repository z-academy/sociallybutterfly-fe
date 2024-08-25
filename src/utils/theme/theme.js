import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Typography, { plus } from "./Typography"; // Import typography

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
    },
    secondary: {
      main: "#FFD700",
    },
    error: {
      main: red.A400,
    },
  },
  typography: Typography, // Add typography to the theme
});

export default theme;
