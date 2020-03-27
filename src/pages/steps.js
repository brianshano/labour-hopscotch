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

  const Renderer = id => {
    console.log('check', id);
    const output = steps.filter(step => {
      return id.id === step.idName;
    });
    console.log('output', output);
    return (
      <div>
        {/* <ContentfulClient /> */}
        {/* <h1>{output[0].name}</h1> */}
        {/* <div>{output[0].desc}</div> */}
        <div className="actions-container">
          {/* {output[0].actions.map(action => {
            return <div className="action">{action}</div>;
          })} */}
        </div>
      </div>
    );
  };
  console.log('entries', entries);

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
              <div className="action">{entry.fields.title}</div>
              <div>
                {entry.fields.description.content.map(content => {
                  return <p>{content.content[0].value}</p>;
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
