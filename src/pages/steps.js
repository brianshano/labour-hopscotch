import React, { useEffect, useState } from 'react';
import './steps.scss';
import * as contentful from 'contentful';

const Steps = (location) => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    var parts = window.location.pathname.split('/');
    var result = parts[parts.length - 1]; // Or parts.pop();
    console.log('ineeeer', result);
    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20',
    });
    client.getEntries().then((entries) => {
      setEntries(
        entries.items.filter((entry) => {
          return result === entry.fields.urlTitle;
        })
      );
    });
  }, []);

  return (
    <>
      <div className="steps-container">{/* <Renderer id={id} /> */}</div>
      <div className="actions-container">
        {entries.map((entry) => {
          console.log('loop', entry);
          return (
            <>
              <div className="action">
                <img
                  src={entry.fields.imageurl}
                  className="action-image"
                  alt={entry.fields.title}
                />
              </div>

              <div className="action-description">
                {entry.fields.description.content.map((content, index) => {
                  const type = content.nodeType;
                  if (type === 'paragraph') {
                    return <p>{content.content[0].value}</p>;
                  } else if (type === 'unordered-list') {
                    return content.content.map((c) => {
                      return (
                        <div className="list-item">
                          {c.content[0].content[0].value}
                        </div>
                      );
                    });
                  }
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Steps;
