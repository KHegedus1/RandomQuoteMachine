import React ,{useState} from 'react';
import Quotes from './Quotes';
import './Style.css'; 
import {FaTwitter} from "react-icons/fa";



function App() { 
  const [quote, setQuote] = useState("If the wind will not serve, take to the oars.")
  return (
    <>
    <div id ="qoute-box">
      <div id="text">{quote}</div>
      <div id="author"></div>
      <button onClick={()=>setQuote("Citat 2 test")}>Change Quote</button>
      <div><a id="tweet-quote"><FaTwitter /></a></div>
    </div>
    </>
  )
}

export default App;