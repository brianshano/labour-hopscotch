import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './assets/labour-hopscotch.jpg';
import Steps from './pages/steps.js';
import './App.scss';
import * as contentful from 'contentful';

function App() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    console.log('ineeeer');

    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20'
    });
    client.getEntries().then(entries => {
      console.log('entries:', entries);
      setEntries(entries.items);
      entries.items.forEach(entry => {
        if (entry.fields.title) {
          console.log(entry.fields.title);
        }
      });
    });
  }, []);
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <div className="header">
            <Link to="/">Labour Hopscotch</Link>
          </div>
          <div className="nav-top">
            <div className="nav-top-item">
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="nav-steps">
            {entries.map(item => {
              const linkUrl = '/steps/' + item.fields.urlTitle;
              return (
                <div className="nav-steps-item">
                  <Link to={linkUrl}>{item.fields.title}</Link>
                </div>
              );
            })}
            {/* <div className="nav-steps-item">
              <Link to="/steps/alternative-therapy">Alternative Therapy</Link>
            </div>
            <div className="nav-steps-item">
              <Link to="/steps/birthing-ball">Birthing Ball</Link>
            </div>
            <div className="nav-steps-item">
              <Link to="/steps/mat">Mat</Link>
            </div>
            <div className="nav-steps-item">
              <Link to="/steps/water">Water</Link>
            </div> */}
          </div>
        </header>
        <div class="app-body">
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
}

function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

const About = () => {
  return (
    <div className="about-container">
      <p className="about-title">About Labour Hopscotch</p>
      <p className="about-content">
        The National Maternity hospital is making strides towards evidence based
        care with it’s award winning innovative ‘Labour Hopscotch’ created by a
        forward thinking Midwife Sinead Thompson. Mobility in labour has been
        shown in study after study to shorten labour, reduce fetal distress and
        reduce the need for medication as well as improving mum’s feelings of
        control and satisfaction.
      </p>
      <p className="about-content">
        Labour Hopscotch – make each step count! A visual birthing tool designed
        to aid you in an active birth. Providing structured guidance by
        outlining 20-minute rotating “steps” to perform during labour. These
        include keeping mobile by walking sideways on a stairs, or sitting on a
        stool while being massaged.
      </p>
      <p>
        Contact&nbsp;
        <a href="mailto:sinead@labourhopscotch.ie?subject=websitequery">
          sinead@labourhopscotch.ie
        </a>
      </p>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
export default App;
