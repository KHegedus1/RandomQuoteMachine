import React ,{useState} from 'react';
import Quotes from './Quotes';
import './Style.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)


function App() { 
  const [quote, setQuote] = useState("If the wind will not serve, take to the oars.")
  return (
    <> 
    <div id ="qoute-box">
      <div id="text">{quote}</div>
      <div id="author"></div>
      <button onClick={()=>setQuote("Citat 2 test")}>Change Quote</button>
      <div><a id="tweet-quote"></a></div>
    </div>
    </>
  )
}

export default App;
