import React ,{useState} from 'react';
import Quotes from './Quotes';
import './Style.css'; 
import {FaTwitter} from "react-icons/fa"; 
import {FaQuoteLeft} from "react-icons/fa";


function App() { 
  const [quote, setQuote] = useState("If the wind will not serve, take to the oars.")
  const [author, setAuthor] = useState("test autor 1")
  return (
    <>
    <div id ="qoute-box">
      <div id="text"><FaQuoteLeft />{quote}</div>
      <div id="author">- {author}</div>
      <button onClick={()=>setQuote("Citat 2 test")&setAuthor("autor 2 test")}>New Quote</button>
      <button><a id="tweet-quote"><FaTwitter /></a></button>
    </div>
    <p id="credits">by KHegedus1</p> 
    </>
  )
}

export default App;