const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const todaysDate = `${addZero(year)}-${addZero(month)}-${addZero(day)}`;
const localAsteroids = JSON.parse(localStorage.getItem("localAsteroids"));

const getAsteroidsData = async () => {
  const loadingContainer = document.querySelector(".loading-container");
  if (!localAsteroids) {
    try {
      const response = await fetch(
        `.netlify/functions/getAsteroids?date=${todaysDate}`
      );
      const data = await response.json();
      localStorage.setItem("localAsteroids", JSON.stringify(data));
      localStorage.setItem("localDate", todaysDate);
      loadingContainer.style.display = "none";
      listAsteroids(data);
      orbitBtnRotate();
    } catch {
      asteroidDataErrorHandler();
    }
  } else {
    try {
      const localDate = localStorage.getItem("localDate");
      if (String(localDate) !== String(todaysDate)) {
        localStorage.clear();
        const response = await fetch(
          `.netlify/functions/getAsteroids?date=${todaysDate}`
        );
        const data = await response.json();
        localStorage.setItem("localAsteroids", JSON.stringify(data));
        localStorage.setItem("localDate", todaysDate);
        loadingContainer.style.display = "none";
        listAsteroids(data);
        orbitBtnRotate();
      } else {
        loadingContainer.style.display = "none";
        listAsteroids(localAsteroids);
        orbitBtnRotate();
      }
    } catch {
      asteroidDataErrorHandler();
    }
  }
};

getAsteroidsData();
