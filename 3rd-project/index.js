let data = [
  {
    img: "images/afghan fam pic.jpg",
    name: "Jacob F.",
    jobTitle: "artist",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    img: "images/pp.jpg",
    name: "Jacob F.",
    jobTitle: "artist",
    message:
      "Hello, she is one of my best friends and I really like her work and blah blah blah, you wanna continue reading this stupid text?",
  },
  {
    img: "images/download.png",
    name: "Razia AKbari",
    jobTitle: "artist",
    message:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

let card = document.getElementById("card")
let next = document.getElementById("next")
let back = document.getElementById("back")
let num = 0

// back.addEventListener("click", backClick())
// next.addEventListener("click", nextClick())

// function render(data){
//     data

// }

function renderCard(data, index) {
  console.log(index)
  // Create the card element

  // Create the inner content of the card
  const innerContent = document.createElement("div")

  // Create and set the image source
  const img = document.createElement("img")
  img.src = data[index].img
  img.alt = ""
  img.id = "img"
  innerContent.appendChild(img)

  // Create and set the name
  const name = document.createElement("p")
  name.textContent = data[index].name
  name.id = "name"
  innerContent.appendChild(name)

  // Create and set the job title
  const jobTitle = document.createElement("p")
  jobTitle.textContent = data[index].jobTitle
  jobTitle.id = "jobTitle"
  innerContent.appendChild(jobTitle)

  card.appendChild(innerContent)

  // Create and set the message
  const message = document.createElement("p")
  message.textContent = data[index].message
  message.id = "message"
  card.appendChild(message)

  body.appendChild(card)
}
window.onload = renderCard(data, num)

function backClick() {
  num--
  if (num < 0) {
    num = data.length - 1
  }
  clear()
  renderCard(data, num)
}

function nextClick() {
  //   if (num > data.length) {
  //     num = 0
  //   }
  num++
  if (num > data.length - 1) {
    num = 0
  }
  clear()
  renderCard(data, num)
}
function clear() {
  card.innerHTML = ""
}
document.addEventListener("click", (e) => {
  console.log(e.target.id)
  const id = e.target.id
  if (id == "back") {
    backClick()
    console.log(num)
  } else if (id == "next") {
    nextClick()
    console.log(num)
  }
})
