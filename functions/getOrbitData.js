import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const id = event.queryStringParameters.id;
  const apiURL = `https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=${id}`;
  const response = await fetch(apiURL);
  const data = await response.json();
  //
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
