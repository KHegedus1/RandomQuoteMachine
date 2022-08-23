import React ,{useState,useEffect} from 'react';
import './Style.css'; 
import {FaTwitter} from "react-icons/fa"; 
import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";


function App() { 
  const [quote, setQuote] = useState("");

  const initialQuote = ()=>{
    fetch("https://type.fit/api/quotes")
    .then((res) =>res.json())
    .then((data) => {
      const rand = Math.floor(Math.random() *data.length )
      setQuote(data[rand]);
    });
  };

  useEffect(() => {
    initialQuote(); 
  },[])

  return (
    <>
    <div id ="qoute-box">
      <div id="text"><FaQuoteLeft />{quote.text} <FaQuoteRight /></div>
      <div id="author">- {quote.author}</div>
      <div id="flex">
      <button id ="tweet-quote" ><a href={`https://twitter.com/intent/tweet?text=${quote.text}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></button>
      <button id ="newQuote" onClick={()=>initialQuote()}>New Quote</button>
      </div>
    </div>
    <p id="credits">by KHegedus1</p> 
    </>
  )
}

export default App;