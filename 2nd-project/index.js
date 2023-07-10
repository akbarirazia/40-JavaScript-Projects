const counter = document.getElementById("counter")
const btn = document.getElementsByClassName("btn")
let num = 0
// console.log(btn)
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    if (e.target.innerHTML == "INCREASE") {
      increase()
    } else if (e.target.innerHTML == "DECREASE") {
      decrease()
    } else if (e.target.innerHTML == "RESET") {
      reset()
    }
  })
}

function increase() {
  num++
  counter.innerText = num
}

function decrease() {
  num--
  counter.innerText = num
}

function reset() {
  num = 0
  counter.innerText = num
}
