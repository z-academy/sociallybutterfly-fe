import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Typography, { plus } from "./Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF5A3C",
    },
    secondary: {
      main: "#292929",
    },
    error: {
      main: '#D96F6F',
    },
    text: {
      secondary: "#656565",
    },
  },
  typography: Typography,
});

export default theme;
