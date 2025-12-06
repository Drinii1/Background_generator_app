const bodyContainer = document.querySelector("body");
const firstBox = document.querySelector(".first_box");
const secondBox = document.querySelector(".second_box");

const  setGradient =() => {
  bodyContainer.style.background = `linear-gradient(to right, ${firstBox.value}, ${secondBox.value})`;
}

firstBox.addEventListener("input", setGradient);
secondBox.addEventListener("input", setGradient);
