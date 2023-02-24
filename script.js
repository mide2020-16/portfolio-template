console.log("its working")
let theme = localStorage.getItem("theme")
if (theme == null) {
  setTheme("light")
}else{
  setTheme(theme)
}
let themes = document.getElementsByClassName("theme-dot")

for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener("click", function (e) {
    e.preventDefault()
    let mode = this.dataset.mode
    setTheme(mode)
  })
  
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css"
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css"
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css"
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css"
  }
  localStorage.setItem("theme", mode)
}