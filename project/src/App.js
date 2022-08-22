import React ,{useState} from 'react';
import './Style.css'; 
import {FaTwitter} from "react-icons/fa"; 
import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";


function App() { 
  const [quote, setQuote] = useState("  If the wind will not serve, take to the oars.")
  const [author, setAuthor] = useState("test autor 1")
  const refreshQuoteAndAuthor = ()=>{setQuote(" Citat 2 test ");
                                     setAuthor("autor 2555555555 test")}

  
  return (
    <>
    <div id ="qoute-box">
      <div id="text"><FaQuoteLeft />{quote} <FaQuoteRight /></div>
      <div id="author">- {author}</div>
      <div id="flex">
      <button id ="tweet-quote" ><a href='twitter.com/intent/tweet'><FaTwitter /></a></button>
      <button id ="newQuote" onClick={()=>refreshQuoteAndAuthor()}>New Quote</button>
      </div>
    </div>
    <p id="credits">by KHegedus1</p> 
    </>
  )
}

export default App;