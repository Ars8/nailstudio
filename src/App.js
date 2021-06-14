import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Portfolio, Appointment, Price } from './component';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>
          <Route path="/appoint">
            <Appointment />
          </Route>
          <Route path="/price">
            <Price />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
