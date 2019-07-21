import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Boards from './pages/Boards/presentation';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/boards" />} />
    <Route path="/boards" component={Boards} />
  </Switch>
);

export default Routes;
