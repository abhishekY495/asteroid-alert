const asteroidsList = document.querySelector("#asteroids");

const getAsteroidsData = async () => {
  const response = await fetch(".netlify/functions/getAsteroids");
  const data = await response.json();
  // 
  const nearEarthObjects = data.near_earth_objects;
  const todaysDate = Object.keys(nearEarthObjects)[0];
  const asteroids = nearEarthObjects[todaysDate];
  console.log(asteroids);
  //
  asteroids.map((asteroid, index) => {
    const asteroidName = asteroid.name;
    const asteroidMaxSize = asteroid.estimated_diameter.meters.estimated_diameter_max;
    const asteroidMinSize = asteroid.estimated_diameter.meters.estimated_diameter_min;
    const asteroidEstimatedDiameter = parseFloat(asteroidMaxSize - asteroidMinSize).toFixed(2);
    const asteroidApproachTime = asteroid.close_approach_data[0].close_approach_date_full.split(" ")[1];
    const isHazardous = asteroid.is_potentially_hazardous_asteroid;
    const asteroidNeoReferenceId = asteroid.neo_reference_id;
    const asteroidSpeed = parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second);
    const asteroidMissDistance = parseFloat(asteroid.close_approach_data[0].miss_distance.astronomical);
    // 
    asteroidsList.innerHTML += `
      <li class="asteroid-container asteroid-container-${index+1}">
        <div class="asteroid-details">
          <p>${index+1}. ${asteroidName}</p>
          <p>Estimated Diameter - ${asteroidEstimatedDiameter} m</p>
          <p>Estimated Speed - ${(asteroidSpeed).toFixed(2)} km/s</p>
          <p>Closest-Approach Time - ${asteroidApproachTime}</p>
          <p>Miss Distance - ${asteroidMissDistance.toFixed(2)} au</p>
          ${isHazardous ? "<p>Potentially Dangerous</p>" : "<p>Not Dangerous</p>"}
        </div>
      </li>
      <br>
    `
  });
};

getAsteroidsData();
