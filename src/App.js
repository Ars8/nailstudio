import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Portfolio, Appointment, Price } from './component';
import Home from './pages/Home';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/" exact>
                <Portfolio />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/appoint">
                <Appointment />
              </Route>
              <Route path="/price">
                <Price />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
