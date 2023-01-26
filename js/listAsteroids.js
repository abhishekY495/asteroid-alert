function listAsteroids(asteroidsData) {
  const asteroidsList = document.querySelector("#asteroids");
  const regex = /\(([^)]*)\)/;
  const nearEarthObjects = asteroidsData["near_earth_objects"];
  const todaysDate = Object.keys(nearEarthObjects)[0];
  const asteroids = nearEarthObjects[todaysDate];
  // 
  asteroids.map((asteroid, index) => {
    const asteroidName = asteroid.name.match(regex)[1];
    const asteroidMaxSize = asteroid.estimated_diameter.meters.estimated_diameter_max;
    const asteroidMinSize = asteroid.estimated_diameter.meters.estimated_diameter_min;
    const asteroidEstimatedSize = parseFloat((asteroidMaxSize + asteroidMinSize) / 2).toFixed(0);
    const asteroidApproachTime = asteroid.close_approach_data[0].close_approach_date_full.split(" ")[1];
    const isHazardous = asteroid.is_potentially_hazardous_asteroid;
    const asteroidNeoReferenceId = asteroid.neo_reference_id;
    const asteroidSpeed = parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second);
    const asteroidMissDistance = parseFloat(asteroid.close_approach_data[0].miss_distance.astronomical);
    // 
    asteroidsList.innerHTML += `
      <div class="container">
        <li class="asteroid-container asteroid-container-${index + 1}">
          <div class="asteroid-details">
            <p class="asteroid-name">${asteroidName}</p>
            <p class="asteroid-size">Estimated Size - ${asteroidEstimatedSize} m</p>
            <p class="asteroid-miss-distance">Miss Distance - ${asteroidMissDistance.toFixed(2)} au</p>
            <p class="asteroid-approach-time">Approach Time - ${asteroidApproachTime}</p>
            ${
            isHazardous
              ? `<div class="toggle-orbit-div">
                  <p class="dangerous">Potentially Dangerous</p>
                  <button
                    class="toggle-orbit-btn toggle-orbit-btn-${index + 1}" 
                    onclick="asteroidOrbit(${asteroidNeoReferenceId},${index + 1})">
                  </button>
                </div>`
              : `<div class="toggle-orbit-div">
                  <p class="not-dangerous">Not Dangerous</p>
                  <button
                    class="toggle-orbit-btn toggle-orbit-btn-${index + 1}" 
                    onclick="asteroidOrbit(${asteroidNeoReferenceId},${index + 1})">
                  </button>
                </div>`
            }
          </div>
          <div class="asteroid-size-comparison">${compareSize(asteroidEstimatedSize)}</div>
          <div class="asteroid-speed-comparison">${compareSpeed(asteroidSpeed)}</div>
        </li>
        <div class="orbit-container orbit-container-${index + 1} grid-col-span-3 hide"></div>
      </div>
    `;
  });
}
