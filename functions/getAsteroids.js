require("dotenv").config();
import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const todaysDate = `${year}-${month}-${day}`;
  //
  const API_URL = "https://api.nasa.gov/neo/rest/v1/feed";
  const API_KEY = process.env.NASA_API_KEY;
  const apiURL = `${API_URL}?api_key=${API_KEY}&start_date=${todaysDate}&end_date=${todaysDate}`;
  //
  const response = await fetch(apiURL);
  const data = await response.json();
  //
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
