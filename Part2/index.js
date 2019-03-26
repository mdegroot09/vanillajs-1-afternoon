function setCard(){
  let idInput = document.getElementById("select-id")
  let colorInput = document.getElementById("select-color")
  console.log("grabID: " + idInput.value)
  console.log("assign-style: " + colorInput.value)
  let card = document.getElementById(idInput.value)
  idInput.style.color = colorInput.value
  colorInput.style.color = colorInput.value
  card.style.color = colorInput.value
}

