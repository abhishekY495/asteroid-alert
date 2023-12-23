const about = document.querySelector("#about");
const dateObj = new Date();
const todaysDate_ = String(dateObj).split(" ").splice(1, 3);

about.innerHTML = `
<p>
  Asteroid Alert uses NASA's <a class="about-links" href="https://api.nasa.gov/" target="_blank">NeoWs</a> 
  ( Near Earth Object Web Service ) API to provide the most up-to-date information on asteroids, 
  that will make a close approach by Earth today i.e 
  <span class="date">
    ${todaysDate_[1]}
    ${todaysDate_[0]}
    ${todaysDate_[2]}
  </span>
  <br>
  Click <img id="about-img" src="./assets/images/asteroid-button.png" alt="An asteroid"></img> 
  to get a 3D view of where the asteroid is in space. 
  <br>
  <div id="about-divider-container">
    <div class="about-divider"></div>
    <img class="asterik" src="./assets/images/asterisk.png" alt="asterik"/>
    <div class="about-divider"></div>
  </div>
</p>
`;
