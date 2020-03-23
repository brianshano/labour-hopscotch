import React from 'react';
import { BrowserRouter as Router, Switch, useParams } from 'react-router-dom';
import './steps.scss';
import stepList from '../steps.json';

const Steps = () => {
  let { id } = useParams();
  console.log('useparams', id);
  const steps = stepList.steps;

  const Renderer = id => {
    console.log('check', id);
    const output = steps.filter(step => {
      return id.id === step.idName;
    });
    console.log('output', output);
    return (
      <div>
        <h1>{output[0].name}</h1>
        <div>{output[0].desc}</div>
        <div className="actions-container">
          {output[0].actions.map(action => {
            return <div className="action">{action}</div>;
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="steps-container">
      <Renderer id={id} />
    </div>
  );
};
export default Steps;
