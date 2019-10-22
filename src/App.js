import React from 'react';
import logo from './logo.svg';
import Quote from './Quote.js';
import './App.css';


class App extends React.Component{

  // constructor(props){
  //   super(props);
  //   // this.state = {quote: new Quote()}
  // }
  render(){
    return (
      <div className="App">
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//          <h2> Random Quote Generator</h2>
//          <div id="quote-box">
//            <div id= "quote">
//             <div id= "text">"Art is what you can get away with"</div>
//             <div id= "author">- Andy Warhol</div>
        
//           <button id= "new-quote">New Quote</button>
//             </div>
//           </div>
//           {/* ReactDOM.render( 
//     quote, 
//     document.getElementById("root")); */}
//           {/*should render new text & corresponding author elements when button is clicked ReactDom.render(text, ) */}

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
     
//     </div>
//   );
// }

export default App;
