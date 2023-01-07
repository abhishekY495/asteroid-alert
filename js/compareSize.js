function compareSize(asteroidEstimatedSize) {
  asteroidEstimatedSize = parseInt(asteroidEstimatedSize);
  if (asteroidEstimatedSize <= 1) {
    return `
        <p>Guitar</p>
        <img src="../assets/guitar.png" alt="Guitar"></img>
      `;
  }
  if (asteroidEstimatedSize <= 2) {
    return `
        <p>Door</p>
        <img src="../assets/door.png" alt="Door"></img>
      `;
  }
  if (asteroidEstimatedSize >= 3 && asteroidEstimatedSize <= 4) {
    return `
        <p>Car</p>
        <img src="../assets/car.png" alt="car"></img>
      `;
  }
  if (asteroidEstimatedSize >= 5 && asteroidEstimatedSize <= 7) {
    return `
        <p>Giraffe</p>
        <img src="../assets/giraffe.png" alt="Giraffe"></img>
      `;
  }
  if (asteroidEstimatedSize >= 8 && asteroidEstimatedSize <= 9) {
    return `
        <p>London bus</p>
        <img src="../assets/london-bus.png" alt="London bus"></img>
      `;
  }
  if (asteroidEstimatedSize >= 10 && asteroidEstimatedSize <= 12) {
    return `
        <p>Electric pole</p>
        <img src="../assets/electric-pole.png" alt="An Electric pole"></img>
      `;
  }
  if (asteroidEstimatedSize >= 13 && asteroidEstimatedSize <= 15) {
    return `
        <p>5-Storey building</p>
        <img src="../assets/5-storey-building.png" alt="5-Storey building"></img>
      `;
  }
  if (asteroidEstimatedSize >= 16 && asteroidEstimatedSize <= 20) {
    return `
        <p>Semi-trailer truck</p>
        <img src="../assets/semi-trailer-truck.png" alt="A Semi-trailer truck"></img>
      `;
  }
  if (asteroidEstimatedSize >= 21 && asteroidEstimatedSize <= 40) {
    return `
        <p>10-Storey building</p>
        <img src="../assets/10-storey-building.png" alt="10-Storey building"></img>
      `;
  }
  if (asteroidEstimatedSize >= 41 && asteroidEstimatedSize <= 50) {
    return `
        <p>Aeroplane</p>
        <img src="../assets/aeroplane.png" alt="An Aeroplane"></img>
      `;
  }
  if (asteroidEstimatedSize >= 51 && asteroidEstimatedSize <= 70) {
    return `
        <p>Leaning Tower of Pisa</p>
        <img src="../assets/leaning-tower-of-pisa.png" alt="Leaning Tower of Pisa"></img>
      `;
  }
  if (asteroidEstimatedSize >= 71 && asteroidEstimatedSize <= 80) {
    return `
        <p>Taj Mahal</p>
        <img src="../assets/taj-mahal.png" alt="Taj Mahal"></img>
      `;
  }
  if (asteroidEstimatedSize >= 81 && asteroidEstimatedSize <= 90) {
    return `
        <p>Statue of Liberty</p>
        <img src="../assets/statue-of-liberty.png" alt="The Statue of Liberty"></img>
      `;
  }
  if (asteroidEstimatedSize >= 91 && asteroidEstimatedSize <= 180) {
    return `
        <p>Football field</p>
        <img src="../assets/football-field.png" alt="A Football field"></img>
      `;
  }
  if (asteroidEstimatedSize >= 101 && asteroidEstimatedSize <= 200) {
    return `
        <p>Great Pyramids of Giza</p>
        <img src="../assets/great-pyramids=of-giza.png" alt="The Great Pyramid of Giza"></img>
      `;
  }
  if (asteroidEstimatedSize >= 201 && asteroidEstimatedSize <= 400) {
    return `
        <p>Eiffel Tower</p>
        <img src="../assets/eiffel-tower.png" alt="Eiffel Tower"></img>
      `;
  }
  if (asteroidEstimatedSize >= 401 && asteroidEstimatedSize <= 700) {
    return `
        <p>
          <span>2X</span> Eiffel Tower
        </p>
        <img src="../assets/eiffel-tower.png" alt="Eiffel Tower"></img>
      `;
  }
  if (asteroidEstimatedSize >= 701 && asteroidEstimatedSize <= 900) {
    return `
        <p>Burj Khalifa</p>
        <img src="../assets/burj-khalifa.png" alt="Burj Khalifa"></img>
      `;
  }
  if (asteroidEstimatedSize >= 901 && asteroidEstimatedSize <= 1000) {
    return `
        <p>
          <span>10X</span> Football field
        </p>
        <img src="../assets/football-field.png" alt="A Football field"></img>
      `;
  }
  if (asteroidEstimatedSize >= 2001 && asteroidEstimatedSize <= 3000) {
    return `
        <p>
          <span>3X</span> Burj Khalifa
        </p>
        <img src="../assets/burj-khalifa.png" alt="Burj Khalifa"></img>
      `;
  }
  if (asteroidEstimatedSize >= 3001 && asteroidEstimatedSize <= 6000) {
    return `
        <p>Kilimanjaro</p>
        <img src="../assets/kilimanjaro.png" alt="kilimanjaro"></img>
      `;
  }
  if (asteroidEstimatedSize >= 6001 && asteroidEstimatedSize <= 9000) {
    return `
        <p>Mount Everest</p>
        <img src="../assets/mount-everest.png" alt="Mount Everest"></img>
      `;
  }
  if (asteroidEstimatedSize >= 9000) {
    return `
        <p>
          <span>${times(asteroidEstimatedSize, 8000)}X</span> Mount Everest
        </p>
        <img src="../assets/mount-everest.png" alt="Mount Everest"></img>
      `;
  }
}
