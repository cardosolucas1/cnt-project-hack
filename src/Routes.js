import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Identification from './pages/identification';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/identification" component={Identification} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
