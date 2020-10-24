import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Identification from './pages/Identificacao/index';
import Home from './pages/Home';
import Localization from './pages/Localizacao';
import Surface from './pages/Pavimento/Superficie/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/identification" component={Identification} />
      <Route exact path="/localization" component={Localization} />
      <Route exact path="/surface" component={Surface} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
