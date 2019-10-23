import React from 'react';
// import $ from 'jquery';

const Button = (props) => {
  // console.log(props)
      return (
            <button id= "new-quote" onClick={props.getQuote}>
              New Quote
              </button>
      );
  }

export default Button