async function asteroidOrbit(asteroidID, index) {
  const apiURL = `.netlify/functions/getOrbitData?id=${asteroidID}`;
  const orbitContainer = document.querySelector(`.orbit-container-${index}`);
  const orbitButton = document.querySelector(`.toggle-orbit-btn-${index}`);
  const spaceOptions = document.querySelector(`.space-options-${index}`);
  orbitContainer.classList.toggle("hide");
  spaceOptions.classList.toggle("hide");
  if (!orbitContainer.classList.contains("hide")) {
    orbitButton.classList.add("open-space");
  } else {
    orbitButton.classList.remove("open-space");
    orbitButton.classList.remove("rotate");
  }
  //
  const localOrbitData = localStorage.getItem(JSON.parse(asteroidID));
  const localDate = localStorage.getItem("localDate");
  if (!localOrbitData) {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      localStorage.setItem(asteroidID, JSON.stringify(data));
      localStorage.setItem("localDate", todaysDate);
      createSpace(orbitContainer, index, data, asteroidID);
    } catch {
      asteroidOrbitDataErrorHandler(orbitContainer);
    }
  } else {
    try {
      if (String(localDate) !== String(todaysDate)) {
        const response = await fetch(apiURL);
        const data = await response.json();
        localStorage.setItem(asteroidID, JSON.stringify(data));
        localStorage.setItem("localDate", todaysDate);
        createSpace(orbitContainer, index, data, asteroidID);
      } else {
        const data = JSON.parse(localStorage.getItem(asteroidID));
        createSpace(orbitContainer, index, data, asteroidID);
      }
    } catch {
      asteroidOrbitDataErrorHandler(orbitContainer);
    }
  }
}
