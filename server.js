const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const port = 3333

const recipes = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  const latestRecipes = recipes.slice(-6)

  return res.render("home", { recipes: latestRecipes })
})

server.get("/recipes", function(req, res) {
  return res.render("recipes", { recipes})
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.get("/recipes/:index", function(req, res) {
  const recipeIndex = req.params.index

  const recipe = recipes[recipeIndex]

  if (!recipe) {
    return res.send("Receita não encontrada!")
  }

  return res.render("recipe-detail", { recipe })
})


server.listen(port, function() {
  console.log(`Server is running on port: ${port}`)
})