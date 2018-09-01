import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WeightProgram from './WeightProgram';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WeightProgram} />
      <Route path="/program/:programId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;