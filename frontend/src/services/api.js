import axios from "axios";
import { logEvent } from "../middleware/LoggingMiddleware";  // ✅ Fixed import path

const API_BASE = "http://20.244.56.144/evaluation-service";

// Example token (isse aapko auth API se lena hoga via /auth)
const TOKEN = localStorage.getItem("authToken");

// Create Short URL
export const createShortUrl = async (data) => {
  try {
    const response = await axios.post(`${API_BASE}/shorturls`, data, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    // Success log
    await logEvent(
      "frontend",
      "info",
      "UrlShortenerPage",
      "Short URL created",
      TOKEN
    );

    return response.data;
  } catch (err) {
    // Error log
    await logEvent(
      "frontend",
      "error",
      "UrlShortenerPage",
      `Failed to create short URL: ${err.message}`,
      TOKEN
    );
    throw err;
  }
};

// Fetch Stats
export const getStats = async () => {
  try {
    const response = await axios.get(`${API_BASE}/shorturls`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    await logEvent(
      "frontend",
      "info",
      "StatsPage",
      "Fetched statistics",
      TOKEN
    );

    return response.data;
  } catch (err) {
    await logEvent(
      "frontend",
      "error",
      "StatsPage",
      `Failed to fetch stats: ${err.message}`,
      TOKEN
    );
    throw err;
  }
};
