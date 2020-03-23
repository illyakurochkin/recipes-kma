import React, {useEffect, useState} from 'react';
import {Loader, Item} from 'semantic-ui-react';
import api from '../../api';
import Recipe from './Recipe';

const RecipesList = () => {
  const [recipes, receiveRecipes] = useState(null);

  useEffect(() => {
    api.fetchAllRecipes().then(receiveRecipes);
  }, []);

  if (!recipes) {
    return <Loader active inline/>;
  }

  return (
    <Item.Group divided>
      {recipes.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
    </Item.Group>
  )
};

export default RecipesList;
