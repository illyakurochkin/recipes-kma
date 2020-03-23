import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Recipes from './screens/Recipes';
import styled from 'styled-components';
import Recipe from './screens/Recipe';
import Edit from './screens/Edit';

const Container = styled.div`
  width: 920px;
  padding: 20px;
  margin: 40px auto;
  border: 1px dashed gray;
`;

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/recipes/:id"><Recipe /></Route>
          <Route path="/recipes"><Recipes /></Route>
          <Route path="/edit/:id"><Edit /></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
