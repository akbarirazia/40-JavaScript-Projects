//id btn
//id color

let array = ["Red", "Green", "Blue", "Yellow", "White", "Black" , 'aqua']
const btn = document.getElementById("btn")
btn.addEventListener("click", changeColor);

const body = document.body;

function changeColor() {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomColor = array[randomIndex];
  body.style.backgroundColor = randomColor;
  const color = document.getElementById("color")
  color.innerHTML = `Background Color: <span style="color: ${randomColor};" "> ${array[randomIndex]} </span>`
}

