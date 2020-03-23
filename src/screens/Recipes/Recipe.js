import React from 'react';
import {Item} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

function Recipe({id, name}) {
  const history = useHistory();

  return (
    <Item style={{cursor: 'pointer'}} onClick={() => history.push(`/recipes/${id}`)}>
      <Item.Image size='tiny' src='../image.png' />
      <Item.Content verticalAlign='middle'>{name}</Item.Content>
    </Item>
  );
}

export default Recipe;
