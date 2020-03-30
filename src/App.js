import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import logo from './assets/labour-hopscotch.jpg';
import Steps from './pages/steps.js';
import About from './pages/about.js';
import './App.scss';
import * as contentful from 'contentful';
// import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
// import ImageMapper from 'react-image-mapper';

const App = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    console.log('ineeeer');

    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20'
    });
    client.getEntries().then(entries => {
      console.log('entries:', entries.items);
      setEntries(
        entries.items.filter(item => {
          return item.sys.contentType.sys.id === 'hopscotchSteps';
        })
      );
      // const slideEntries = entries.
      entries.items.forEach(entry => {
        if (entry.fields.title) {
          console.log(entry.fields.title);
        }
      });
    });
  }, []);
  const params = {
    // slidesPerView: 6,
    spaceBetween: 20,
    slidesPerView: 'auto',
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: {
      invert: true
    },
    hashNavigation: {
      replaceState: true
    },
    centeredSlides: true,
    grabCursor: true
  };

  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <div className="header">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_480/v1585318095/Labour%20Hopscotch/labour-hopscotch-logo-trans.png"
                className="header-logo"
              />
            </Link>
          </div>
          <div className="nav-top">
            <div className="nav-top-item">
              <Link to="/about">About</Link>
            </div>
          </div>

          {/* <div className="hopscotch">
              {entries.map((item, index) => {
                const linkUrl = '/steps/' + item.fields.urlTitle;
                let doublerow = true;
                if (index === 0 || index === 3 || index === 6) {
                  doublerow = false;
                }
                return (
                  <>
                    <div
                      className={
                        doublerow ? 'doublerow ' + index : 'singlerow ' + index
                      }
                    >
                      <Link to={linkUrl} className="slide-link">
                        <img
                          src={item.fields.icon.fields.file.url}
                          className="slide-image"
                        />
                      </Link>
                      <div className="nav-steps-item">{item.fields.title}</div>
                    </div>
                    {!doublerow ? <div className="test">test</div> : null}
                  </>
                );
              })}
            </div> */}
          {/* </div> */}
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
    <div className="hopscotch-main-image">
      <div className="nav-steps">
        <div className="hopscotch">
          {/* <div className="single">{entries.items[0].fields.title}</div> */}
          <Link to="/steps/alternative-therapies" className="slide-link">
            <div className="single">
              <div className="single-image">
                <img
                  alt="alternative-therapies"
                  src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_330/v1585310801/Labour%20Hopscotch/stepicons/7-alternative.png"
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
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_330/v1585310801/Labour%20Hopscotch/stepicons/6-birthing-ball.png"
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
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_330/v1585310801/Labour%20Hopscotch/stepicons/5-mat.png"
                  />
                </div>
                <div className="hopscotch-name">Mat</div>
              </div>
            </Link>
          </div>
          <Link to="/steps/water" className="slide-link">
            <div className="single">
              <div className="single-image">
                <img
                  alt="water"
                  src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_330/v1585310801/Labour%20Hopscotch/stepicons/4-water.png"
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
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_330/v1585310801/Labour%20Hopscotch/stepicons/3-toilet.png"
                  />
                </div>
                <div className="hopscotch-name">Toilet</div>
              </div>
            </Link>
            <Link to="/steps/stool" className="slide-link">
              <div className="single">
                <div className="single-image">
                  <img
                    alt="stool"
                    src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_330/v1585310801/Labour%20Hopscotch/stepicons/2-stool.png"
                  />
                </div>
                <div className="hopscotch-name">Stool</div>
              </div>
            </Link>
          </div>
          <Link to="/steps/mobilise" className="slide-link">
            <div className="single">
              <div className="single-image">
                <img
                  alt="mobilise"
                  src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_330/v1585310801/Labour%20Hopscotch/stepicons/1-mobilise.png"
                />
              </div>
              <div className="hopscotch-name">Mobilise</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
