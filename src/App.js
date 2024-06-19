import React from "react";
import ReactDOM from "react-dom";
import RadioGroupComponent from "./RadioGroupComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    action: {
      selected: "#e6f0ff",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <RadioGroupComponent />
      </Box>
    </ThemeProvider>
  );
}
