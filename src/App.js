import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/labour-hopscotch.jpg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Labour Hopscotch</p>

      <Link to="/about">About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <p>About Labour Hopscotch</p>

      <Link to="/">Home</Link>
    </div>
  );
}
export default App;
