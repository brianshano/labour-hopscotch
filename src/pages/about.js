import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const About = () => {
  const [entries, setEntries] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState([]);
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
        if (entry.sys.contentType.sys.id === 'article') {
          console.log('hhshshhs', entry.fields);
          setArticleTitle(entry.fields.title);
          setArticleContent(entry.fields.content.content);
          console.log('content', entry.fields.content.content);
        }
        // if (entry.fields.title) {
        //   console.log(entry.fields.title);
        // }      console.log('content', article.content);
      });
    });
  }, []);
  return (
    <div className="about-container">
      <p className="about-title">{articleTitle}</p>
      {/* <p className="about-content">{article.content}</p> */}
      {articleContent.map((content, index) => {
        console.log('content', content);

        return (
          <p className="about-content" key={index}>
            {content.content[0].value}
          </p>
        );
      })}
      {/* <p className="about-content">
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
      </p> */}
      <p>
        Contact&nbsp;
        <a href="mailto:sinead@labourhopscotch.ie?subject=websitequery">
          sinead@labourhopscotch.ie
        </a>
      </p>
    </div>
  );
};
export default About;
