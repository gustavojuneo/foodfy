const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
  recipe.addEventListener("click", function() {
    const id = recipe.getAttribute("id")
    window.location.href = `/recipes/${id}`
  })
}