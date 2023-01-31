function compareSpeed(asteroidSpeed) {
  const averageSpeedOfRifleBulletInKiloMeterPerSec = 1;
  if (asteroidSpeed <= 1) {
    return `
      <img class="comparison-image" src="../assets/images/rifle-bullet.png" alt="A Rifle bullet"></img>
      <p>Bullet</p>
    `;
  } else {
    return `
      <img class="comparison-image" src="../assets/images/rifle-bullet.png" alt="A Rifle bullet"></img>
      <p>
        <span>${times(asteroidSpeed, averageSpeedOfRifleBulletInKiloMeterPerSec)}X</span>
        Bullet
      </p>
    `;
  }
}
