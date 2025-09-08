import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function UrlShortenerPage() {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary: just log values (later we’ll call backend API)
    console.log("URL:", url);
    console.log("Validity:", validity);
    console.log("Shortcode:", shortcode);
    alert("Form submitted! (Backend integration next step)");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        URL Shortener
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Enter Long URL"
          variant="outlined"
          margin="normal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <TextField
          fullWidth
          label="Validity (minutes, optional)"
          variant="outlined"
          margin="normal"
          type="number"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />

        <TextField
          fullWidth
          label="Preferred Shortcode (optional)"
          variant="outlined"
          margin="normal"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Shorten URL
        </Button>
      </form>
    </Box>
  );
}

export default UrlShortenerPage;
