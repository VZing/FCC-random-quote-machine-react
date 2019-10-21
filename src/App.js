import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Random Quote Generator
         <div id="quote-box">
           <div id= "quote">
            <div id= "text">"Art is what you can get away with"</div>
            <div id= "author">- Andy Warhol</div>
            </div>
          </div>
          <button id= "new-quote">New Quote</button>
          {/* ReactDOM.render( 
    quote, 
    document.getElementById("root")); */}
          {/*should render new text & corresponding author elements when button is clicked ReactDom.render(text, ) */}
        </p>
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

export default App;
