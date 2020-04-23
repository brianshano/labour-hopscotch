import React, { useEffect, useState } from 'react';
import './steps.scss';

import { Link } from 'react-router-dom';

import * as contentful from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Steps = (location) => {
  const [entries, setEntries] = useState([]);
  const [prevEntry, setPrevEntry] = useState('');
  const [nextEntry, setNextEntry] = useState('');
  useEffect(() => {
    let parts = window.location.pathname.split('/');
    let result = parts[parts.length - 1]; // Or parts.pop();
    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20',
    });
    client.getEntries().then((entries) => {
      const pos = entries.items.find(function (e) {
        return e.fields.urlTitle === result;
      });
      const posID = pos.fields.id;
      setNextEntry(
        entries.items.find((entry, index) => {
          return entry.fields.id === posID + 1;
        })
      );

      setPrevEntry(
        entries.items.find((entry, index) => {
          return entry.fields.id === posID - 1;
        })
      );

      setEntries(
        entries.items.filter((entry, index) => {
          return result === entry.fields.urlTitle;
        })
      );
    });
  }, [location]);

  const showPrev = () => {
    const link = `/steps/${prevEntry.fields.urlTitle}`;

    return (
      <Link to={link} className="slide-link">
        <div className="action-navigation-set">
          <div>{'<<'}</div>
          <div className="action-navigation-subset left">
            <img
              alt={prevEntry.fields.title}
              src={prevEntry.fields.imageurl}
              className="small-step-image"
            />
            <div>{prevEntry.fields.title}</div>
          </div>
        </div>
      </Link>
    );
  };
  const showNext = () => {
    const link = `/steps/${nextEntry.fields.urlTitle}`;
    return (
      <Link to={link} className="slide-link">
        <div className="action-navigation-set">
          <div className="action-navigation-subset right">
            <img
              alt={nextEntry.fields.title}
              src={nextEntry.fields.imageurl}
              className="small-step-image"
            />
            <div>{nextEntry.fields.title}</div>
          </div>
          <div>{'>>'}</div>
        </div>
      </Link>
    );
  };

  const RenderedContent = (content) => {
    const returned = content.content.map((item) => {
      return <div>{item}</div>;
    });
    return returned;
  };
  return (
    <>
      <div className="steps-container">{/* <Renderer id={id} /> */}</div>
      <div className="actions-container">
        {entries.map((entry, index) => {
          return (
            <>
              <div className="action">
                <img
                  src={entry.fields.imageurl}
                  className="action-image"
                  alt={entry.fields.title}
                />
                <img
                  class="action-footsteps"
                  src="https://res.cloudinary.com/bshano/image/upload/c_scale,f_auto,w_46/v1585906726/Labour%20Hopscotch/footsteps.png"
                  alt="baby footprints"
                />
              </div>

              <div className="action-description">
                <RenderedContent
                  content={entry.fields.description.content.map(
                    (content, index) => {
                      return documentToReactComponents(content);
                    }
                  )}
                />
              </div>
            </>
          );
        })}
        <div className="action-navigation">
          <div className="action-navigation-back">
            {prevEntry ? showPrev() : null}
          </div>
          <div className="action-navigation-back">
            {nextEntry ? showNext() : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Steps;
