window.addEventListener("resize", toggle)
const items = document.querySelector(".items")
const icon = document.getElementById("icon")
const dropdown = document.querySelector(".dropdown")

function toggle() {
  let parent = items.parentNode
  if (window.innerWidth < 600) {
    items.classList.toggle("hide")
    // icon.classList.remove("hide")
    parent.appendChild(icon)
  } else if (window.innerWidth > 600) {
    console.log("here")
    // icon.classList.add("hide")
    parent.removeChild(icon)

    items.classList.toggle("hide")
  }
}
icon.addEventListener("click", () => {
  dropdown.classList.toggle("hide")
})
toggle()
