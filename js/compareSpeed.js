function compareSpeed(asteroidSpeed) {
  const averageSpeedOfBulletInKiloMeterPerSec = 1;
  if (asteroidSpeed <= 1) {
    return `
      <p>Speed of Bullet</p>
      <img src="../assets/images/bullet.png"></img>
    `;
  } else {
    return `
      <p>
        <span>
          ${times(asteroidSpeed, averageSpeedOfBulletInKiloMeterPerSec)}X
        </span>
        Speed of Bullet
      </p>
      <img src="../assets/images/bullet.png"></img>
    `;
  }
}
