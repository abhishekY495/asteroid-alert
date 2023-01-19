const date = new Date().getDate();
const month = new Date().getMonth()+1;
const year = new Date().getFullYear();
const todaysDate = `${addZero(year)}-${addZero(month)}-${addZero(date)}`;

const getAsteroidsData = async () => {
  const localAsteroids = JSON.parse(localStorage.getItem("localAsteroids"));
  const localDate = localStorage.getItem("localDate");
  if (!localAsteroids) {
    const response = await fetch(".netlify/functions/getAsteroids");
    const data = await response.json();
    localStorage.setItem("localAsteroids", JSON.stringify(data));
    listAsteroids(data);
  } else {
    if (String(localDate) !== String(todaysDate)) {
      localStorage.clear();
      const response = await fetch(".netlify/functions/getAsteroids");
      const data = await response.json();
      localStorage.setItem("localAsteroids", JSON.stringify(data));
      listAsteroids(data);
    }
    listAsteroids(localAsteroids);
  }
};

getAsteroidsData();