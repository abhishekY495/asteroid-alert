function compareSize(asteroidEstimatedSize) {
  asteroidEstimatedSize = parseInt(asteroidEstimatedSize);
  if (asteroidEstimatedSize <= 1) {
    return `
      <img class="comparison-image" src="../assets/images/guitar.png" alt="Guitar"></img>
      <p>Guitar</p>
    `;
  }
  if (asteroidEstimatedSize <= 2) {
    return `
      <img class="comparison-image" src="../assets/images/door.png" alt="Door"></img>
      <p>Door</p>
    `;
  }
  if (asteroidEstimatedSize >= 3 && asteroidEstimatedSize <= 4) {
    return `
      <img class="comparison-image" src="../assets/images/car.png" alt="car"></img>
      <p>Car</p>
    `;
  }
  if (asteroidEstimatedSize >= 5 && asteroidEstimatedSize <= 7) {
    return `
      <img class="comparison-image" src="../assets/images/giraffe.png" alt="Giraffe"></img>
      <p>Giraffe</p>
    `;
  }
  if (asteroidEstimatedSize >= 8 && asteroidEstimatedSize <= 9) {
    return `
      <img class="comparison-image" src="../assets/images/london-bus.png" alt="London bus"></img>
      <p>London bus</p>
    `;
  }
  if (asteroidEstimatedSize >= 10 && asteroidEstimatedSize <= 12) {
    return `
      <img class="comparison-image" src="../assets/images/electric-pole.png" alt="An Electric pole"></img>
      <p>Electric pole</p>
    `;
  }
  if (asteroidEstimatedSize >= 13 && asteroidEstimatedSize <= 15) {
    return `
      <img class="comparison-image" src="../assets/images/5-storey-building.png" alt="5-Storey building"></img>
      <p><span>5</span> Storey building</p>
    `;
  }
  if (asteroidEstimatedSize >= 16 && asteroidEstimatedSize <= 20) {
    return `
      <img class="comparison-image" src="../assets/images/semi-trailer-truck.png" alt="A Semi-trailer truck"></img>
      <p>Semi-trailer truck</p>
    `;
  }
  if (asteroidEstimatedSize >= 21 && asteroidEstimatedSize <= 40) {
    return `
      <img class="comparison-image" src="../assets/images/10-storey-building.png" alt="10-Storey building"></img>
      <p><span>10</span> Storey building</p>
    `;
  }
  if (asteroidEstimatedSize >= 41 && asteroidEstimatedSize <= 50) {
    return `
      <img class="comparison-image" src="../assets/images/aeroplane.png" alt="An Aeroplane"></img>
      <p>Aeroplane</p>
    `;
  }
  if (asteroidEstimatedSize >= 51 && asteroidEstimatedSize <= 70) {
    return `
      <img class="comparison-image" src="../assets/images/leaning-tower-of-pisa.png" alt="Leaning Tower of Pisa"></img>
      <p>Leaning Tower of Pisa</p>
    `;
  }
  if (asteroidEstimatedSize >= 71 && asteroidEstimatedSize <= 80) {
    return `
      <img class="comparison-image" src="../assets/images/taj-mahal.png" alt="Taj Mahal"></img>
      <p>Taj Mahal</p>
    `;
  }
  if (asteroidEstimatedSize >= 81 && asteroidEstimatedSize <= 90) {
    return `
      <img class="comparison-image" src="../assets/images/statue-of-liberty.png" alt="The Statue of Liberty"></img>
      <p>Statue of Liberty</p>
    `;
  }
  if (asteroidEstimatedSize >= 91 && asteroidEstimatedSize <= 180) {
    return `
      <img class="comparison-image" src="../assets/images/football-field.png" alt="A Football field"></img>
      <p>Football field</p>
    `;
  }
  if (asteroidEstimatedSize >= 181 && asteroidEstimatedSize <= 200) {
    return `
      <img class="comparison-image" src="../assets/images/great-pyramids-of-giza.png" alt="The Great Pyramid of Giza"></img>
      <p>Great Pyramids of Giza</p>
    `;
  }
  if (asteroidEstimatedSize >= 201 && asteroidEstimatedSize <= 400) {
    return `
      <img class="comparison-image" src="../assets/images/eiffel-tower.png" alt="Eiffel Tower"></img>
      <p>Eiffel Tower</p>
    `;
  }
  if (asteroidEstimatedSize >= 401 && asteroidEstimatedSize <= 700) {
    return `
      <img class="comparison-image" src="../assets/images/eiffel-tower.png" alt="Eiffel Tower"></img>
      <p>
        <span>2X</span> Eiffel Tower
      </p>
    `;
  }
  if (asteroidEstimatedSize >= 701 && asteroidEstimatedSize <= 900) {
    return `
      <img class="comparison-image" src="../assets/images/burj-khalifa.png" alt="Burj Khalifa"></img>
      <p>Burj Khalifa</p>
    `;
  }
  if (asteroidEstimatedSize >= 901 && asteroidEstimatedSize <= 1000) {
    return `
      <img class="comparison-image" src="../assets/images/football-field.png" alt="A Football field"></img>
      <p>
        <span>10X</span> Football field
      </p>
    `;
  }
  if (asteroidEstimatedSize >= 1001 && asteroidEstimatedSize <= 2000) {
    return `
      <img class="comparison-image" src="../assets/images/burj-khalifa.png" alt="Burj Khalifa"></img>
      <p>
        <span>2X</span> Burj Khalifa
      </p>
    `;
  }
  if (asteroidEstimatedSize >= 2001 && asteroidEstimatedSize <= 3000) {
    return `
      <img class="comparison-image" src="../assets/images/burj-khalifa.png" alt="Burj Khalifa"></img>
      <p>
        <span>3X</span> Burj Khalifa
      </p>
    `;
  }
  if (asteroidEstimatedSize >= 3001 && asteroidEstimatedSize <= 4000) {
    return `
      <img class="comparison-image" src="../assets/images/burj-khalifa.png" alt="Burj Khalifa"></img>
      <p>
        <span>4X</span> Burj Khalifa
      </p>
    `;
  }
  if (asteroidEstimatedSize >= 4001 && asteroidEstimatedSize <= 6000) {
    return `
      <img class="comparison-image" src="../assets/images/kilimanjaro.png" alt="kilimanjaro"></img>
      <p>Kilimanjaro</p>
    `;
  }
  if (asteroidEstimatedSize >= 6001 && asteroidEstimatedSize <= 9000) {
    return `
      <img class="comparison-image" src="../assets/images/mount-everest.png" alt="Mount Everest"></img>
      <p>Mount Everest</p>
    `;
  }
  if (asteroidEstimatedSize >= 9000) {
    return `
      <img class="comparison-image" src="../assets/images/mount-everest.png" alt="Mount Everest"></img>
      <p>
        <span>${times(asteroidEstimatedSize, 8000)}X</span> Mount Everest
      </p>
    `;
  }
}
