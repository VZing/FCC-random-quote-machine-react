import React from 'react';
// import $ from 'jquery';
import Button from './Button.js';

const API_KEY =`${process.env.REACT_APP_QUOTE_API_KEY}`
console.log(API_KEY);
export default class Quote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           isLoading: true,
           quotes: [],
           error: null
        };
    }

