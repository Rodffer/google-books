import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import Favorite from '../pages/Favorite';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/details" component={Detail} />
    <Route path="/favorites" component={Favorite} />
  </Switch>
);

export default Routes;
