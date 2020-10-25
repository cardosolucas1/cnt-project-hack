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
import IntersectionVerticalSinalization from './pages/Sinalizacao/Vertical/Intersecao';
import VisibilityVerticalSinalization from './pages/Sinalizacao/Vertical/Visibilidade';
import ReadabilityVerticalSinalization from './pages/Sinalizacao/Vertical/Legibilidade';
import Infrastructure from './pages/Infraestrutura';
import CriticalPoint from './pages/PontosCriticos';
import HighwayType from './pages/Geometria/TipoRodovia';
import HighwayProfile from './pages/Geometria/PerfilRodovia';
import AdditionalStreet from './pages/Geometria/FaixasAdicionais';
import Bridges from './pages/Geometria/PontesViadutos';
import StreetCurves from './pages/Geometria/Curvas/Situacao';
import StreetCurvesCondicional from './pages/Geometria/Curvas/Condicao';
import GeometryShoulder from './pages/Geometria/Acostamento';

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
      <Route exact path="/intersectionVerticalSinalization" component={IntersectionVerticalSinalization} />
      <Route exact path="/visibilityVerticalSinalization" component={VisibilityVerticalSinalization} />
      <Route exact path="/readabilityVerticalSinalization" component={ReadabilityVerticalSinalization} />
      <Route exact path="/infrastructure" component={Infrastructure} />
      <Route exact path="/criticalPoint" component={CriticalPoint} />
      <Route exact path="/highwayType" component={HighwayType} />
      <Route exact path="/highwayProfile" component={HighwayProfile} />
      <Route exact path="/additionalStreet" component={AdditionalStreet} />
      <Route exact path="/bridges" component={Bridges} />
      <Route exact path="/streetCurves" component={StreetCurves} />
      <Route exact path="/streetCurvesConditional" component={StreetCurvesCondicional} />
      <Route exact path="/shoulderConditional" component={GeometryShoulder} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
