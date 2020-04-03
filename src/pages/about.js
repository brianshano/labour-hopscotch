import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const About = () => {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState([]);
  useEffect(() => {
    console.log('ineeeer');

    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20'
    });
    client.getEntries().then(entries => {
      entries.items.forEach(entry => {
        if (entry.sys.contentType.sys.id === 'article') {
          setArticleTitle(entry.fields.title);
          setArticleContent(entry.fields.content.content);
        }
      });
    });
  }, []);
  return (
    <div className="about-container">
      <p className="about-title">{articleTitle}</p>
      {articleContent.map((content, index) => {
        console.log('content', content);

        return (
          <p className="about-content" key={index}>
            {content.content[0].value}
          </p>
        );
      })}

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
