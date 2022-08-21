import React ,{useState} from 'react';
import Quotes from './Quotes'
import './Style.css'; 

function App() { 
  const [quote, setQuote] = useState("If the wind will not serve, take to the oars.")
  return (
    <> 
    <Quotes />
    <div id ="qoute-box">
      <div id="text">{quote}</div>
      <div id="author"></div>
      <button onClick={()=>setQuote("sfasf")}>Change Quote</button>
      <div><a id="tweet-quote"></a></div>
    </div>
    </>
  )
}

export default App;
