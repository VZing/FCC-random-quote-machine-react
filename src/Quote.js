import React from 'react';
// import $ from 'jquery';
import Button from './Button.js';

const API_KEY =`${process.env.REACT_APP_QUOTE_API_KEY}`
console.log(API_KEY);
export default class Quote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    
    // function getQuote(){
    //     $.ajax({
    //         url: API_KEY,
    //         type: 'GET',
    //         datatype: 'json',
    //         success: function(data){
    //             alert(JSON.stringify(data))
    //         },
    //         error: function(err){ 
    //         }
    //     })
    // }
    componentDidMount(){

        fetch(API_KEY)
        .then(quoteInfo => {
            console.log(quoteInfo.json())

        
            
        })
    
    }

    render() {
        // getQuote();
      return (
        <div id="quote-box">
             <div id= "quote">
              <div id= "text">quote</div>
              <div id= "author">- author</div>
              <Button />
              </div>
            </div>
      );
    }
  }


