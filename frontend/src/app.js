import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import UrlShortenerPage from "./pages/UrlShortenerPage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #1e293b, #334155, #475569)", // dark navy → lighter slate
          boxShadow: "0 0 15px rgba(147,51,234,0.4)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ✨ URL Shortener
          </Typography>

          <Box>
            <Button
              component={Link}
              to="/"
              sx={{
                mx: 1,
                fontWeight: "bold",
                color: "#e2e8f0", // lighter gray text
                "&:hover": {
                  color: "#60a5fa",
                  background: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Shortener
            </Button>
            <Button
              component={Link}
              to="/stats"
              sx={{
                mx: 1,
                fontWeight: "bold",
                color: "#e2e8f0",
                "&:hover": {
                  color: "#a78bfa",
                  background: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Stats
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Routes */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f1f5f9, #e2e8f0)", // light gray-blue background instead of white
          p: 2,
        }}
      >
        <Routes>
          <Route path="/" element={<UrlShortenerPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
