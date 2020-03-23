import React from 'react';
import {Header} from 'semantic-ui-react';
import styled from 'styled-components';
import RecipesList from './RecipesList';

const Container = styled.div`
  width: 920px;
  margin: auto;
`;

function Recipes() {
  return (
    <Container>
      <Header as='h1'>Recipes List</Header>
      <RecipesList/>
    </Container>
  );
}

export default Recipes;
