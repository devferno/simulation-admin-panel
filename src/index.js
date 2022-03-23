import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
axios.defaults.baseURL = "https://simulation-credit.herokuapp.com/api/";

const theme = createTheme({
  shape: { borderRadius: 4 },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
