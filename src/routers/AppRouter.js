import React from 'react';
import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom';
  import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router >
      <div>
        <Switch>
          <Route path='/countries' component={ DashboardRoutes } />
        </Switch>
      </div>
    </Router>
  )
}
