import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { green, purple, orange, red } from "@mui/material/colors";
// import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";
import "./assets/main.css";
// import "./theme.js";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Incomes } from "./pages/Incomes";
import { Expenses } from "./pages/Expenses";
import { Reports } from "./pages/Reports";

function App() {
  // const theme = unstable_createMuiStrictModeTheme();

  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      success: {
        main: orange[500],
      },
      hedera: {
        main: "#89cf6d",
        dark: "#6bb94c",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={"hey"} />
          <Route path="/login" element={<Login />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
