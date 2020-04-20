import React from 'react';
import { Link } from 'react-router-dom';
import './HopscotchBoard.scss';

const HopscotchBoard = () => {
  return (
    <div className="hopscotch-board">
      <section className="hopscotch stage">
        <div className="row-1  vibrate-1">
          <Link to="/steps/alternative-therapies" className="slide-link">
            <img
              src="https://res.cloudinary.com/bshano/image/upload/f_auto,q_auto/v1587121503/Labour%20Hopscotch/stepicons-eps/7-alternative-therapies.png"
              alt="alternative-therapies"
            />
          </Link>
        </div>
        <div className="hopscotch-row row-2">
          <div className="row-left vibrate-2">
            <Link to="/steps/birthing-ball" className="slide-link">
              <img
                src="https://res.cloudinary.com/bshano/image/upload/f_auto,q_auto/v1587121502/Labour%20Hopscotch/stepicons-eps/6-birthing-ball.png"
                alt="birthing-ball"
              />
            </Link>
          </div>
          <div className="row-right vibrate-3">
            <Link to="/steps/mat" className="slide-link">
              <img
                src="https://res.cloudinary.com/bshano/image/upload/f_auto,q_auto/v1587121502/Labour%20Hopscotch/stepicons-eps/5-mat.png"
                alt="mat"
              />
            </Link>
          </div>
        </div>
        <div className="row-3 vibrate-1">
          <Link to="/steps/water" className="slide-link">
            <img
              src="https://res.cloudinary.com/bshano/image/upload/f_auto,q_auto/v1587121502/Labour%20Hopscotch/stepicons-eps/4-water.png"
              alt="water"
            />
          </Link>
        </div>
        <div className="hopscotch-row row-4">
          <div className="row-left vibrate-2">
            <Link to="/steps/toilet" className="slide-link">
              <img
                src="https://res.cloudinary.com/bshano/image/upload/f_auto,q_auto/v1587121502/Labour%20Hopscotch/stepicons-eps/3-toilet.png"
                alt="toilet"
              />
            </Link>
          </div>
          <div className="row-right vibrate-3">
            <Link to="/steps/birthing-stool" className="slide-link">
              <img
                src="https://res.cloudinary.com/bshano/image/upload/f_auto,q_auto/v1587121502/Labour%20Hopscotch/stepicons-eps/2-stool.png"
                alt="birthing stool"
              />
            </Link>
          </div>
        </div>
        <div className="row-5 vibrate-1">
          <Link to="/steps/mobilise" className="slide-link">
            <img
              src="https://res.cloudinary.com/bshano/image/upload/f_auto,q_auto/v1587121502/Labour%20Hopscotch/stepicons-eps/1-mobilise.png"
              alt="mobilse"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HopscotchBoard;
