function toggleMode() {
  //alert("Hello World !")
  const html = document.documentElement

  html.classList.toggle("light")

  const img = html.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //html.classList.remove()
    img.setAttribute("src", "./Dia_2/assets/avatar-light.png")
  } else {
    //html.classList.add("light")
    img.setAttribute("src", "./Dia_2/assets/avatar.png")
  }
}
