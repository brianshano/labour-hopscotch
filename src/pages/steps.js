import React, { useEffect, useState } from 'react';
import './steps.scss';

import { Link } from 'react-router-dom';

import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Steps = (location) => {
  const [entries, setEntries] = useState([]);
  const [titles, setTitles] = useState([]);
  const [thisTitle, setThisTitle] = useState('');
  const [entryIndex, setEntryIndex] = useState(0);
  const [prevEntry, setPrevEntry] = useState('');
  const [nextEntry, setNextEntry] = useState('');
  const [clientEntries, setClientEntries] = useState([]);
  useEffect(() => {
    let parts = window.location.pathname.split('/');
    let result = parts[parts.length - 1]; // Or parts.pop();
    setThisTitle(result); // Or parts.pop();

    // let entryIndex = 0;
    console.log('ineeeer', result);
    const client = contentful.createClient({
      space: '3mvtf9hx44sd',
      accessToken: 'lidYYf2UG2FiinMVzNMJ3xcJq-4JMZfE5sTLoytxg20',
    });
    console.log('clientgetentries', client.getEntries());
    console.log('getOthers', result, titles);
    client.getEntries().then((entries) => {
      console.log('what here', entries);
      const pos = entries.items.find(function (e) {
        console.log('checktitle', e.fields.urlTitle, e.fields.id, result);
        return e.fields.urlTitle === result;
      });
      const posID = pos.fields.id;
      console.log('POS result', pos.fields.id);
      // .indexOf(result);
      setNextEntry(
        entries.items.find((entry, index) => {
          console.log('nxxx', entry.fields.title, entry.fields.id, posID);
          return entry.fields.id === posID + 1;
        })
      );
      // console.log('check NEXT', nextEntryTitle);
      // if (typeof nextEntryTitle !== 'undefined') {
      //   setNextEntry(nextEntryTitle);
      // }

      setPrevEntry(
        entries.items.find((entry, index) => {
          console.log('pxxx', entry, posID);
          return entry.fields.id === posID - 1;
        })
      );
      // console.log('check NEXT', prevEntryTitle);
      // if (typeof prevEntryTitle !== 'undefined') {
      //   setPrevEntry(prevEntryTitle.fields.title);
      // }
      // console.log('pos', pos, C.fields.title);
      setTitles(
        entries.items.map((entry) => {
          return {
            urlTitle: entry.fields.urlTitle,
            id: entry.fields.id || null,
          };
        })
      );

      setClientEntries(entries);
      setEntries(
        entries.items.filter((entry, index) => {
          console.log(
            'setentries',
            index,
            entries.items[index].fields.urlTitle
          );
          if (result === entry.fields.urlTitle) {
            setEntryIndex(entry.fields.id);
          }
          // if (index > 0) {
          //   setPrevEntry(
          //     entries.items[index - 1].fields.urlTitle || ''
          //   );
          // }
          // if (index < index.length) {
          //   setNextEntry(
          //     entries.items[index + 1].fields.urlTitle || ''
          //   );
          // }

          return result === entry.fields.urlTitle;
        })
      );
    });
  }, [location]);
  const showNavPrev = (id) => {
    console.log(
      'tttt',
      entries.filter((entry) => {})
    );
    console.log('tttt', id);
    // console.log(
    //   'showNavPrev',
    //   clientEntries.items.forEach((item) => {
    //     return item.fields.id;
    //   })
    // );
    // const result = clientEntries.filter((item) => {
    //   return (item.fields.id = nextEntry);
    // });
    // console.log('om hjere', result);
    return 'whatr is is';
  };

  const showPrev = () => {
    const link = `/steps/${prevEntry.fields.urlTitle}`;

    return (
      <Link to={link} className="slide-link">
        <div className="action-navigation-set">
          <div>{'<<'}</div>
          <img src={prevEntry.fields.imageurl} className="small-step-image" />
          <div>{prevEntry.fields.title}</div>
        </div>
      </Link>
    );
  };
  const showNext = () => {
    console.log('nextEntry', nextEntry);
    const link = `/steps/${nextEntry.fields.urlTitle}`;
    return (
      <Link to={link} className="slide-link">
        <div className="action-navigation-set">
          <div>{nextEntry.fields.title}</div>
          <img src={nextEntry.fields.imageurl} className="small-step-image" />
          <div>{'>>'}</div>
        </div>
      </Link>
    );
  };
  return (
    <>
      <div className="steps-container">{/* <Renderer id={id} /> */}</div>
      <div className="actions-container">
        {entries.map((entry, index) => {
          console.log('loop', entry, index);
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
