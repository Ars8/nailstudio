import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import { 
  Portfolio, 
  Appointment, 
  Price, 
  NewFoto, 
  EmployeeSchedule, 
  UpdateFoto 
} from './pages';
import Auth from './pages/Auth/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { isAdm, isLogged } from './store/ducks/auth/selectors';

function App() {
  const isLoggedIn = useSelector(isLogged);
  const isAdmin = useSelector(isAdm);
  console.log(isLoggedIn);
  console.log(isAdmin);

  let routes;

  if (isLoggedIn && isAdmin) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>
        <Route path="/appoint">
          <Appointment />
        </Route>
        <Route path="/price">
          <Price />
        </Route>
        <Route path="/portfolio/new">
          <NewFoto />
        </Route>
        <Route path="/portfolio/:fotoId">
          <UpdateFoto />
        </Route>
        <Route path="/employeeSchedule">
          <EmployeeSchedule />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>
        <Route path="/appoint">
          <Appointment />
        </Route>
        <Route path="/price">
          <Price />
        </Route>
        <Route path="/employeeSchedule">
          <EmployeeSchedule />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>
        <Route path="/appoint">
          <Appointment />
        </Route>
        <Route path="/price">
          <Price />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (    
      <div className="App">
        <div className="content">
          <Router>
            <MainNavigation />
            <main>{routes}</main>
          </Router>
        </div>
      </div>
  );
}

export default App;
