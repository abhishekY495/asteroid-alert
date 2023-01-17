const todaysDate = (new Date()).getDate();
localStorage.setItem("localDate", String(20));

async function asteroidOrbit(asteroidID, index) {
  const orbitContainer = document.querySelector(`.orbit-container-${index}`);
  orbitContainer.classList.toggle("hide");
  const localOrbitData = localStorage.getItem(JSON.parse(asteroidID));
  const localDate = localStorage.getItem("localDate");
  // 
  if (!localOrbitData || !localDate) {
    console.log("%cFetching Data", "color: red;");
    const response = await fetch(`.netlify/functions/getOrbitData?id=${asteroidID}`);
    const data = await response.json();
    localStorage.setItem(`${asteroidID}`, JSON.stringify(data));
    localStorage.setItem("localDate", todaysDate);
    createSpace(orbitContainer, index, data, asteroidID);
  } else {
    if (String(localDate) !== String(todaysDate)) {
      console.log("%cFetching new Data", "color: orange;");
      const response = await fetch(`.netlify/functions/getOrbitData?id=${asteroidID}`);
      const data = await response.json();
      localStorage.setItem(`${asteroidID}`, JSON.stringify(data));
      localStorage.setItem("localDate", todaysDate);
      createSpace(orbitContainer, index, data, asteroidID);
    }
    console.log("%cFrom LocalStorage", "color: green;");
    const data = JSON.parse(localStorage.getItem(asteroidID));
    createSpace(orbitContainer, index, data, asteroidID);
  }
}
