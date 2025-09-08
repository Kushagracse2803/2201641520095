import axios from "axios";

// ⚠️ Affordmed test server  URL
const API_BASE = "http://20.244.56.144/evaluation-service";

//  Create Short URL
export const createShortUrl = async (data) => {
  const response = await axios.post(`${API_BASE}/shorturls`, data);
  return response.data;
};

//  Get Stats
export const getStats = async () => {
  const response = await axios.get(`${API_BASE}/shorturls`);
  return response.data;
};
