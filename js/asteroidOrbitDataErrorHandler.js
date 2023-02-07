function asteroidOrbitDataErrorHandler(orbitContainer) {
  localStorage.clear();
  orbitContainer.style.background = "url('./assets/signal-error.gif')"
  orbitContainer.style.backgroundPosition = "center";
  orbitContainer.style.backgroundSize = "cover";
  orbitContainer.style.backgroundRepeat = "no-repeat";
  orbitContainer.innerHTML = `
    <p id="orbit-data-error-message">
      Refresh<br>
      <span style="font-size:1rem">OR<br></span>
      Try again later
    </p>
  `;
}
