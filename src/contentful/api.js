import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './steps.scss';
import stepList from '../steps.json';
import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: '3mvtf9hx44sd',
  accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20'
});
client.getEntries().then(entries => {
  // setEntries(entries.items);
  entries.items.forEach(entry => {
    if (entry.fields.title) {
      console.log(entry.fields.title);
    }
  });
});
