const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
  recipe.addEventListener("click", function() {
    const imageId = recipe.getAttribute("id")
    modalOverlay.classList.add("active")
    modalOverlay.querySelector(".modal-content img").src = `assets/${imageId}.png`
  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector(".modal-content img").src = ""
})