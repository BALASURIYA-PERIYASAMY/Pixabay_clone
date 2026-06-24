
import axios from "axios";

const API_KEY = "56253094-81bbfdc7e3a392248fbc5a240";

export const getImages = async (
  query,
  page
) => {
  const response = await axios.get(
    "https://pixabay.com/api/",
    {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 20
      }
    }
  );

  return response.data;
};