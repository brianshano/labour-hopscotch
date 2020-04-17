import React from 'react';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Steps from './pages/steps.js';
import About from './pages/about.js';
import HopscotchBoard from './components/HopscotchBoard';
import './App.scss';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <div className="header">
            <Link to="/">
              <div class="stage">
                <div class="box bounce-7">
                  <img
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_480/v1585318095/Labour%20Hopscotch/labour-hopscotch-logo-trans.png"
                    className="header-logo"
                    alt="Labour Hopscotch"
                  />
                </div>
              </div>
            </Link>
          </div>
        </header>

        <div className="app-body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/steps/:id">
              <Steps />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

const Home = () => {
  const windowWidth = window.innerWidth;
  console.log('width', windowWidth);

  // const URL =
  //   'https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_' +
  //   windowWidth +
  //   '/v1585353002/Labour%20Hopscotch/labour-hopscotch.jpg';

  return (
    <>
      <HopscotchBoard />

      <div className="footer">
        <div className="footer-item">
          <div>Labour Hopscotch 2020</div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </>
  );
};

export default App;
