import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from "@mui/material";
import { getStats } from "../services/api";

function StatsPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setUrls(data);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        URL Statistics
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Shortcode</b></TableCell>
              <TableCell><b>Original URL</b></TableCell>
              <TableCell><b>Clicks</b></TableCell>
              <TableCell><b>Expiry</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.length > 0 ? (
              urls.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.shortcode}</TableCell>
                  <TableCell>{row.url}</TableCell>
                  <TableCell>{row.clicks}</TableCell>
                  <TableCell>{row.expiry}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default StatsPage;
