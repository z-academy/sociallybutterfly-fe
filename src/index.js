import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "utils/theme/theme";
import Landingpage from "./landingpage";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Landingpage />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
