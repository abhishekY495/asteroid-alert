function orbitBtnRotate() {
  const toggleOrbitBtns = document.querySelectorAll(".toggle-orbit-btn");
  toggleOrbitBtns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.classList.add("rotate");
    });
    btn.addEventListener("mouseout", () => {
      btn.classList.remove("rotate");
    });
  });
}
