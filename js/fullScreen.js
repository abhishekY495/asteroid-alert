function fullScreen(elem) {
  const orbitContainer = document.querySelector(`.${elem}`);
  //
  if (orbitContainer.requestFullscreen) {
    orbitContainer.requestFullscreen();
  } else if (orbitContainer.webkitRequestFullscreen) {
    orbitContainer.webkitRequestFullscreen();
  } else if (orbitContainer.mozRequestFullScreen) {
    orbitContainer.mozRequestFullscreen();
  } else if (orbitContainer.msRequestFullscreen) {
    orbitContainer.msRequestFullscreen();
  }
  //
  if (document.exitFullscreen === null) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
