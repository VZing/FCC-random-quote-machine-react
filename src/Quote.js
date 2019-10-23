
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
            items: []
        };
        this.getQuote = this.getQuote.bind(this);
    }


    getQuote(){
        axios.get(API_KEY)
            .then(({ data }) => {
                console.log(data.quoteText);
            });
    }
    componentDidMount() {
        this.getQuote();
    }

    render() {
  
        return (
            <div id="quote-box">
                <div id="quote">
                    <div id="text">quote</div>
                    <div id="author">- author</div>
                    <Button />
                </div>
            </div>
        );
    }
}

