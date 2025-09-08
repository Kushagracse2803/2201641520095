import axios from "axios";

// Test Server ke logging endpoint (docs me diya hoga)
const LOG_API = "http://20.244.56.144/evaluation-service/logs";

/**
 * Reusable Logging Function
 * @param {string} stack - "frontend" ya "backend"
 * @param {string} level - "info" | "debug" | "warn" | "error" | "fatal"
 * @param {string} pkg - module/page name (e.g. "UrlShortenerPage")
 * @param {string} message - custom log message
 * @param {string} token - auth token for logging API
 */
export async function logEvent(stack, level, pkg, message, token) {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
}
