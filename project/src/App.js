import React ,{useState,useEffect,useRef} from 'react';
import './Style.css'; 
import {FaTwitter} from "react-icons/fa"; 
import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";


function App() { 
  const [quote, setQuote] = useState("ref={boje}");
  const pozadina = ["#660066","#801a00","#00b300","#483d8b","#ff1493","#ffd700"];
  const boje = useRef();
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
  useEffect(() =>{
    boje.current.style.color= pozadina[Math.floor(Math.random() * pozadina.length)];
  },[quote])

  return (
    <>
    <div ref={boje} id ="qoute-box">
      <div id="text"><FaQuoteLeft />{quote.text} <FaQuoteRight /></div>
      <div id="author">- {quote.author}</div>
      <div id="flex">
      <button  id ="tweet-quote" ><a href={`https://twitter.com/intent/tweet?text=${quote.text}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></button>
      <button  id ="newQuote" onClick={()=>initialQuote()}>New Quote</button>
      </div>
    </div>
    <p id="credits">by KHegedus1</p> 
    </>
  )
}

export default App;