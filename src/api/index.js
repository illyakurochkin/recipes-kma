import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:3001'});

function fetchRecipe(id) {
  return api.get(`/recipes/${id}`)
    .then(({data}) => data);
}

function fetchAllRecipes() {
  return api.get('/recipes')
    .then(({data}) => data);
}

function deleteRecipe(id) {
  return api.delete(`/recipes/${id}`);
}

function updateRecipe(recipe) {
  return api.put(`/recipes/${recipe.id}`, recipe);
}

export default {
  updateRecipe,
  fetchRecipe,
  fetchAllRecipes,
  deleteRecipe,
};
