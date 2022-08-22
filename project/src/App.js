import React ,{useState} from 'react';
import Quotes from './Quotes';
import './Style.css'; 
import {FaTwitter} from "react-icons/fa"; 
import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";


function App() { 
  const [quote, setQuote] = useState("  If the wind will not serve, take to the oars.")
  const [author, setAuthor] = useState("test autor 1")
  return (
    <>
    <div id ="qoute-box">
      <div id="text"><FaQuoteLeft />{quote} <FaQuoteRight /></div>
      <div id="author">- {author}</div>
      <div id="flex">
      <button id ="tweet-quote" ><a href='twitter.com/intent/tweet'><FaTwitter /></a></button>
      <button id ="newQuote" onClick={()=>setQuote(" Citat 2 test ")&setAuthor("autor 2555555555 test")}>New Quote</button>
      </div>
    </div>
    <p id="credits">by KHegedus1</p> 
    </>
  )
}

export default App;