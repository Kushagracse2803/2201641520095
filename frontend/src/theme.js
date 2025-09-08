import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4f46e5", // neon blue-purple
    },
    secondary: {
      main: "#9333ea", // purple
    },
    background: {
      default: "#0f172a", // deep navy background
      paper: "#1e293b", // card background
    },
    text: {
      primary: "#f8fafc",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    button: { textTransform: "none", fontWeight: "bold" },
  },
});

export default theme;
