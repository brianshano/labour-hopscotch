import React from 'react';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Steps from './pages/steps.js';
import About from './pages/about.js';
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
      <div className="hopscotch-main-image">
        <div className="nav-steps">
          <div className="hopscotch">
            {/* <div className="single">{entries.items[0].fields.title}</div> */}
            <Link to="/steps/alternative-therapies" className="slide-link">
              <div className="single">
                <div className="single-image">
                  <img
                    alt="alternative-therapies"
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_180/v1585310801/Labour%20Hopscotch/stepicons/7-alternative.png"
                  />
                </div>
                <div className="hopscotch-name">Alternative Therapies</div>
              </div>
            </Link>

            <div className="double">
              <Link to="/steps/birthing-ball" className="slide-link">
                <div className="single">
                  <div className="single-image">
                    <img
                      alt="birthing-ball"
                      src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_180/v1585310801/Labour%20Hopscotch/stepicons/6-birthing-ball.png"
                    />
                  </div>
                  <div className="hopscotch-name">Birthing Ball</div>
                </div>
              </Link>
              <Link to="/steps/mat" className="slide-link">
                <div className="single">
                  <div className="single-image">
                    <img
                      alt="mat"
                      src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_180/v1585310801/Labour%20Hopscotch/stepicons/5-mat.png"
                    />
                  </div>
                  <div className="hopscotch-name">Mat</div>
                </div>
              </Link>
            </div>
            <Link to="/steps/water" className="slide-link">
              <div className="single">
                <div className="babysteps">
                  <img
                    alt="baby steps"
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_54/v1585906726/Labour%20Hopscotch/footsteps.png"
                  />
                </div>
                <div className="single-image">
                  <img
                    alt="water"
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_180/v1585310801/Labour%20Hopscotch/stepicons/4-water.png"
                  />
                </div>
                <div className="hopscotch-name">Water</div>
              </div>
            </Link>
            <div className="double">
              <Link to="/steps/toilet" className="slide-link">
                <div className="single">
                  <div className="single-image">
                    <img
                      alt="toilet"
                      src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_180/v1585310801/Labour%20Hopscotch/stepicons/3-toilet.png"
                    />
                  </div>
                  <div className="hopscotch-name">Toilet</div>
                </div>
              </Link>
              <Link to="/steps/birthing-stool" className="slide-link">
                <div className="single">
                  <div className="single-image">
                    <img
                      alt="birthing stool"
                      src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_180/v1585310801/Labour%20Hopscotch/stepicons/2-stool.png"
                    />
                  </div>
                  <div className="hopscotch-name">Birthing Stool</div>
                </div>
              </Link>
            </div>
            <Link to="/steps/mobilise" className="slide-link">
              <div className="single">
                <div className="single-image">
                  <img
                    alt="mobilise"
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_180/v1585310801/Labour%20Hopscotch/stepicons/1-mobilise.png"
                  />
                </div>
                <div className="hopscotch-name">Mobilise</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
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
