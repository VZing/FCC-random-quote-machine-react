
import React from 'react';
import axios from 'axios';
import Button from './Button.js';

const API_KEY = `${process.env.REACT_APP_QUOTE_API_KEY}`
console.log(API_KEY);
export default class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            quote: '',
            author: ''
        };
        this.getQuote = this.getQuote.bind(this);
    }


    getQuote(){
        axios.get(API_KEY)
            .then(({ data }) => {
               this.setState({ quote: data.quoteText, author: data.quoteAuthor}, () => {
                   console.log(this.state);
               })
            });
    }
    componentDidMount() {
        this.getQuote();
    }

    render() {
  
        return (
            <div id="quote-box">
                <div id="quote">
                    <div id="text">{this.state.quote}</div>
                    <div id="author">- {this.state.author}</div>
                    <Button getQuote={this.getQuote} />
                </div>
            </div>
        );
    }
}

