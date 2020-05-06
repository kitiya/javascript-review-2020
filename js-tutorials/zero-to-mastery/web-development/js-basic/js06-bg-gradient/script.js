let cssContent = document.querySelector(".css-content");
let container = document.querySelector("#js006");
let color1 = document.querySelector("input[name='color1']");
let color2 = document.querySelector("input[name='color2']");

function handleClick(event) {
  let bgProperty = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  container.style.background = bgProperty;
  cssContent.textContent = bgProperty;
}

color1.addEventListener("input", handleClick);
color2.addEventListener("input", handleClick);
