import React from 'react';
import logo from './logo.svg';
import Quote from './Quote.js';
import './App.css';

// import $ from 'jquery';


class App extends React.Component{

  render(){
    return (
      <div className="App">
        {/* <head><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script></head> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
           <h2> Random Quote Generator</h2>
            <Quote />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
       
      </div>
    );
  }
}

export default App;
