import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Typography, { plus } from "./Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
    },
    secondary: {
      main: "#4A4A4A",
    },
    error: {
      main: red.A400,
    },
  },
  typography: Typography,
});

export default theme;
