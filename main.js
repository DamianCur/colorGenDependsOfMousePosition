const cords = document.querySelector("p");

function init() {

  cords.style.position = "absolute";
  cords.style.top = "20px";
  cords.style.left = "20px";
  cords.style.fontSize = "20px";
  cords.style.fontWeight = "bold";
  cords.textContent = `X: 0 Y: 0`
  document.body.style.backgroundColor = "#ddd";

}

init();





document.body.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
  cords.textContent = `X: ${x} Y: ${y}`;

  if (x % 2 === 0 && y % 2 === 0) {
    document.body.style.backgroundColor = "teal";
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    document.body.style.backgroundColor = "cadetblue";
  } else {
    document.body.style.backgroundColor = "brown";
  }



})