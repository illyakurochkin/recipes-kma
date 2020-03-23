import React, {useEffect, useState} from 'react';
import {Button, Header, Image, Loader} from 'semantic-ui-react';
import {useHistory, useLocation} from 'react-router-dom';
import api from '../../api';

function Recipe() {
  const [recipe, receiveRecipe] = useState(null);
  const id = useLocation().pathname.substring('/recipes/'.length);
  const history = useHistory();

  useEffect(() => { api.fetchRecipe(id).then(receiveRecipe); }, []);

  if(!recipe) {
    return <Loader active inline/>;
  }

  const onEdit = () => history.push(`/edit/${id}`);
  const onDelete = () => {
    api.deleteRecipe(id);
    history.push('/recipes');
  };

  return (
    <div>
      <Header as="h1">{recipe.name}</Header>
      <div>
        <Button primary onClick={onEdit}>Edit</Button>
        <Button color="red" onClick={onDelete}>Delete</Button>
      </div>
      <Header as="h3">Description: {recipe.shortDesc}</Header>
      <Header as="h3">Date created: {recipe.createDate}</Header>
      <Image src='../image.png' fluid />
    </div>
  );
}

export default Recipe;
