import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './steps.scss';
import stepList from '../steps.json';
import * as contentful from 'contentful';

const Steps = location => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    var parts = window.location.pathname.split('/');
    var result = parts[parts.length - 1]; // Or parts.pop();
    console.log('ineeeer', result);
    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20'
    });
    client.getEntries().then(entries => {
      setEntries(
        entries.items.filter(entry => {
          return result === entry.fields.urlTitle;
        })
      );
    });
  }, [window.location.pathname]);
  let { id } = useParams();
  const steps = stepList.steps;
  let count = 0;
  console.log('step entries', entries);

  return (
    <>
      <div className="steps-container">{/* <Renderer id={id} /> */}</div>
      <div className="actions-container">
        {entries.map(entry => {
          console.log(
            'content',
            entry.fields.description.content.map(content => {
              return content.content[0].value;
            })
          );

          return (
            <>
              <div className="action">
                <img
                  src={entry.fields.icon.fields.file.url}
                  className="action-image"
                  alt={entry.fields.title}
                />
                {entry.fields.title}
              </div>

              <div className="action-description">
                {entry.fields.description.content.map((content, index) => {
                  const type = content.nodeType;
                  if (type === 'paragraph') {
                    return <p>{content.content[0].value}</p>;
                  } else if (type === 'unordered-list') {
                    return content.content.map(c => {
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
