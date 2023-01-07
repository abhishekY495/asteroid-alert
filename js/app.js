const getAsteroidsData = async () => { 
  const response = await fetch(".netlify/functions/getAsteroids");
  const data = await response.json();
  console.log(data);
};
getAsteroidsData();