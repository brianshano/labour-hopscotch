import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import logo from './assets/labour-hopscotch.jpg';
import Steps from './pages/steps.js';
import About from './pages/about.js';
import './App.scss';
import * as contentful from 'contentful';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const App = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    console.log('ineeeer');

    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20'
    });
    client.getEntries().then(entries => {
      console.log('entries:', entries);
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
          <div className="nav-steps">
            <Swiper {...params}>
              {entries.map((item, index) => {
                const linkUrl = '/steps/' + item.fields.urlTitle;
                return (
                  <div className="slide" key={index}>
                    <Link to={linkUrl} className="slide-link">
                      <img
                        src={item.fields.icon.fields.file.url}
                        className="slide-image"
                      />
                      <div className="nav-steps-item">{item.fields.title}</div>
                    </Link>
                  </div>
                );
              })}
            </Swiper>
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

function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
