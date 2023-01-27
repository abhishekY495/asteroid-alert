function spaceOptions(index) {
  const spaceOptions = document.querySelector(`.space-options-${index}`);
  const options = document.querySelector(`.options-${index}`);
  //
  const spaceOptionsCheckBox = spaceOptions.childNodes[1].children[0].checked;
  const spaceOptionsLabel = spaceOptions.childNodes[1];
  const setDateBtn = spaceOptions.childNodes[5];
  const slowerBtn = document.querySelector(`.slower-btn-${index}`);
  const fasterBtn = document.querySelector(`.faster-btn-${index}`);
  const startBtn = document.querySelector(`.start-btn-${index}`);
  const stopBtn = document.querySelector(`.stop-btn-${index}`);
  //
  if (spaceOptionsCheckBox === true) {
    spaceOptionsLabel.style.opacity = 0.8;
    options.style.display = "flex";
    setDateBtn.style.display = "block";
  } else {
    spaceOptionsLabel.style.opacity = 0.5;
    options.style.display = "none";
    setDateBtn.style.display = "none";
  }
  // 
  startBtn.addEventListener("click", () => {
    space.start();
  });
  stopBtn.addEventListener("click", () => {
    space.stop();
  });
  fasterBtn.addEventListener("click", () => {
    space.setJdDelta(space.getJdDelta() * 1.5);
  });
  slowerBtn.addEventListener("click", () => {
    space.setJdDelta(space.getJdDelta() * 0.5);
  });
  setDateBtn.addEventListener("click", () => {
    space.setDate(new Date(prompt("Enter date (YYYY-mm-dd)")));
    space.stop();
  });
}
