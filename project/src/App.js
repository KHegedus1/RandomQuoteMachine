import React from 'react';
import Quotes from './Quotes'
import './Style.css'; 

function App() { 
  return (
    <> 
    <Quotes />
    <div id ="qoute-box">
      <div id="text"></div>
      <div id="author"></div>
      <div><button id="new-quote"></button></div>
      <div><button><a id="tweet-quote">ssss</a></button></div>
    </div>
    </>
  )
}

export default App;
