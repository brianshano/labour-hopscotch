import React, { useState } from 'react';
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
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <HashRouter>
      <div className="App" id="main">
        <header className="App-header">
          <div className="header">
            <Link to="/" title="Labour hopscotch">
              {/* <div className="stage"> */}
              {/* <div className="box bounce-7"> */}
              <img
                src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_765/v1587679212/Labour%20Hopscotch/hopscotch-banner.png"
                className="header-logo"
                alt="Labour Hopscotch"
                title="Labour hopscotch"
              />
              <img
                src="https://res.cloudinary.com/bshano/image/upload/v1587680159/Labour%20Hopscotch/footprints-both.svg"
                className="header-logo-steps"
                alt="Labour Hopscotch"
                title="Labour hopscotch"
                width="60"
              />
              {/* </div> */}
              {/* </div> */}
            </Link>
          </div>
        </header>
        <div className="video-modal">
          {/* <div className="video-modal"> */}
          <Modal
            isOpen={showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={() => setShowModal(!showModal)}
            shouldCloseOnOverlayClick={true}
            className="nodal"
            appElement={document.getElementById('main')}
          >
            <ReactPlayer url="https://vimeo.com/406108027" controls />
            <button onClick={() => setShowModal(false)}>X Close Video</button>
          </Modal>

          <button
            type="button"
            class="vid-button"
            onClick={() => setShowModal(!showModal)}
          >
            <div>Watch Video &nbsp;</div>
            <img
              alt="video link"
              src="https://res.cloudinary.com/bshano/image/upload/v1587391337/Labour%20Hopscotch/video-white.svg"
            />
          </button>
          {/* )} */}
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/steps/:id">
              <Route component={Steps} />
              {/* <Steps /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

const Home = () => {
  // const windowWidth = window.innerWidth;
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
