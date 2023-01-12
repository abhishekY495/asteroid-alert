async function asteroidOrbit(asteroidID, index) {
  const orbitContainer = document.querySelector(`.orbit-container-${index}`);
  orbitContainer.classList.toggle("hide");
  createSpace(orbitContainer, index);
  //
  const response = await fetch(`.netlify/functions/getOrbitData?id=${asteroidID}`);
  const data = await response.json();
  const orbitData = data.orbit.elements;
  console.log(orbitData);
  //
  const epoch = data.orbit.epoch;
  const a = orbitData.find((element) => element.name === "a");
  const e = orbitData.find((element) => element.name === "e");
  const i = orbitData.find((element) => element.name === "i");
  const om = orbitData.find((element) => element.name === "om");
  const w = orbitData.find((element) => element.name === "w");
  const ma = orbitData.find((element) => element.name === "ma");
  const q = orbitData.find((element) => element.name === "q");
  const ephem = new Spacekit.Ephem(
    {
      a: parseFloat(a.value),
      e: parseFloat(e.value),
      i: parseFloat(i.value),
      om: parseFloat(om.value),
      w: parseFloat(w.value),
      ma: parseFloat(ma.value),
      q: parseFloat(q.value),
      epoch: parseFloat(epoch),
    },
    "deg"
  )
  // 
  const asteroid = space.createShape(`asteroid-${asteroidID}`, {
    ephem,
    shape: {
      shapeUrl: "./assets/space/shapeData.obj",
    },
    rotation: {
      enable: true,
      lambdaDeg: 251,
      betaDeg: -63,
      period: 3.755067,
      yorp: 1.9e-8,
      phi0: 0,
      jd0: 2443568.0,
      speed: 0.3,
    },
  });
  // 
  space.getViewer().followObject(asteroid, [-0.01, -0.01, 0.01]);
}
