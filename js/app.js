const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const todaysDate = `${addZero(year)}-${addZero(month)}-${addZero(day)}`;

const getAsteroidsData = async () => {
  const localAsteroids = JSON.parse(localStorage.getItem("localAsteroids"));
  const localDate = localStorage.getItem("localDate");
  if (!localAsteroids) {
    const response = await fetch(`.netlify/functions/getAsteroids?date=${todaysDate}`);
    const data = await response.json();
    localStorage.setItem("localAsteroids", JSON.stringify(data));
    localStorage.setItem("localDate", todaysDate);
    listAsteroids(data);
  } else {
    if (String(localDate) !== String(todaysDate)) {
      localStorage.clear();
      const response = await fetch(`.netlify/functions/getAsteroids?date=${todaysDate}`);
      const data = await response.json();
      localStorage.setItem("localAsteroids", JSON.stringify(data));
      localStorage.setItem("localDate", todaysDate);
      listAsteroids(data);
    } else {
      listAsteroids(localAsteroids);
    }
  }
};

getAsteroidsData();
