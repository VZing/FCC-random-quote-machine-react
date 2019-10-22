import React from 'react';
import Button from './Button.js';

const API_KEY =`${process.env.REACT_APP_QUOTE_API_KEY}`
console.log(API_KEY);
export default class Quote extends React.Component {
    render() {
      return (
        <div id="quote-box">
             <div id= "quote">
              <div id= "text">"Art is what you can get away with"</div>
              <div id= "author">- Andy Warhol</div>
              <Button />
              </div>
            </div>
      );
    }
  }


