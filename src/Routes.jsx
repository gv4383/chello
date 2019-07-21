import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/boards" />} />
  </Switch>
);

export default Routes;
