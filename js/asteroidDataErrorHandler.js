function asteroidDataErrorHandler() {
  localStorage.clear();
  const asteroidsList = document.querySelector("#asteroids");
  asteroidsList.innerHTML = `
    <p id="error-message">Refresh <span style="font-size:1rem">OR</span> Try again later</p>
    <img id="error-image" src="./assets/error.gif" alt="An Engineer repairing a control module on the International Space Station."/>
  `;
}
