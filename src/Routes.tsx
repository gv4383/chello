import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BoardsContainer from './components/Dashboard/container';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/boards" />} />
    <Route path="/boards" component={BoardsContainer} />
  </Switch>
);

export default Routes;
