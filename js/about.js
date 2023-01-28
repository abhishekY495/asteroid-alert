const about = document.querySelector("#about");
const dateObj = new Date;
const todaysDate_ = String(dateObj).split(" ").splice(0,4).join(" ");

about.innerHTML = `
<p>
  Asteroid alert uses 
  <a class="about-links" href="https://api.nasa.gov/" target="_blank">NASA's NeoWs API</a> 
  to provide the most recent information on asteroids that will make a close approach by 
  Earth today i.e <span class="bold">${todaysDate_}</span>. 
  Click <img id="about-img" src="./assets/images/asteroid-button.png"></img> 
  to get a 3D view of where the asteroid is in space, made using 
  <a class="about-links" href="https://typpo.github.io/spacekit/" target="_blank">spacekit</a>. 
  The app is open-source and can be found on 
  <a class="about-links" href="https://github.com/abhishekY495/asteroidalert" target="_blank">github</a>. 
  <br>
  <div id="about-divider-container">
    <div class="about-divider"></div>
    <img class="asterik" src="./assets/images/asterisk.png" />
    <div class="about-divider"></div>
  </div>
</p>
`;
