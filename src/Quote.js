import React from 'react';
import Button from './Button.js';
import $ from 'jquery';

const API_KEY =`${process.env.REACT_APP_QUOTE_API_KEY}`
// console.log(API_KEY);
export default class Quote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    
    componentDidMount(){

        fetch(API_KEY)
        .then(quoteInfo => {
            console.log(quoteInfo.json())
            // console.log(JSON.parse(quoteInfo))
        
            
        })
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    // items: result.items
                })
            },
            (error)=>{
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }


    render() {
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


