document.querySelector("#button_ingredients").addEventListener("click", function() {
  if(this.innerHTML === "ESCONDER") {
    this.innerHTML = "MOSTRAR"
  } else {
    this.innerHTML = "ESCONDER"
  }
  document.querySelector(".ingredients ul").classList.toggle("hide")
})

document.querySelector("#button_preparation").addEventListener("click", function() {
  if(this.innerHTML === "ESCONDER") {
    this.innerHTML = "MOSTRAR"
  } else {
    this.innerHTML = "ESCONDER"
  }
  document.querySelector(".preparation ul").classList.toggle("hide")
})

document.querySelector("#button_info").addEventListener("click", function() {
  if(this.innerHTML === "ESCONDER") {
    this.innerHTML = "MOSTRAR"
  } else {
    this.innerHTML = "ESCONDER"
  }
  document.querySelector(".more-info p").classList.toggle("hide")
})