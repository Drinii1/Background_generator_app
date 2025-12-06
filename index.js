const bodyContainer = document.querySelector("body");
const firstBox = document.querySelector(".first_box");
const secondBox = document.querySelector(".second_box");


firstBox.addEventListener("input", () => {
    console.log(firstBox.value)
  bodyContainer.style.background = `linear-gradient(to right,${firstBox.value},${secondBox.value})`;
});
secondBox.addEventListener("input", () => {

  bodyContainer.style.background = `linear-gradient(to right,${secondBox.value},${firstBox.value})`;
});