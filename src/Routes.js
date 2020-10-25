import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Identification from './pages/Identificacao/index';
import Home from './pages/Home';
import Localization from './pages/Localizacao';
import Surface from './pages/Pavimento/Superficie';
import Speed from './pages/Pavimento/Velocidade';
import Shoulder from './pages/Pavimento/Qualidade';
import Central from './pages/Sinalizacao/Horizontal/Central/';
import Lateral from './pages/Sinalizacao/Horizontal/Lateral/';
import Defensas from './pages/Sinalizacao/Horizontal/Defensas/';
import SpeedVerticalSinalization from './pages/Sinalizacao/Vertical/Velocidade';
import IndicationVerticalSinalization from './pages/Sinalizacao/Vertical/Indicacao';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/identification" component={Identification} />
      <Route exact path="/localization" component={Localization} />
      <Route exact path="/surface" component={Surface} />
      <Route exact path="/speed" component={Speed} />
      <Route exact path="/shoulder" component={Shoulder} />
      <Route exact path="/centralHorizontalSinalization" component={Central} />
      <Route exact path="/lateralHorizontalSinalization" component={Lateral} />
      <Route exact path="/fendersHorizontalSinalization" component={Defensas} />
      <Route exact path="/speedVerticalSinalization" component={SpeedVerticalSinalization} />
      <Route exact path="/indicationVerticalSinalization" component={IndicationVerticalSinalization} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
