import React from 'react';
import {Button, Item} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  
  :hover {
    text-decoration: underline;
  }
`;

function Recipe({id, name, createDate}) {
  const history = useHistory();

  const onEdit = () => history.push(`/edit/${id}`);
  const onDelete = () => {
    api.deleteRecipe(id);
    history.push('/recipes');
  };

  return (
    <Item style={{cursor: 'pointer'}} >
      <Content onClick={() => history.push(`/recipes/${id}`)}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Item.Image style={{paddingRight: 10}} size='tiny' src='../image.png'/>
          <Item.Content verticalAlign='middle'><a>{name}</a></Item.Content>
        </div>
        <Item.Meta>{createDate}</Item.Meta>
      </Content>
      <ButtonsContainer>
        <Button basic primary onClick={onEdit}>Edit</Button>
        <Button basic color="red" onClick={onDelete}>Delete</Button>
      </ButtonsContainer>
    </Item>
  );
}

export default Recipe;
