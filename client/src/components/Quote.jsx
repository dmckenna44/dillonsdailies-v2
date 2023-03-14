import React, {useState, useEffect} from "react";
import baseURL from '../apiRoute';


const Quote = () => {


  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/api/saying`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setQuote(data)
        console.log('response from quote', data)
      })
  }, [])


  return (
    <div className="daily-item-container">
        <div className="daily-item">
          <p>{quote.quote}</p>
          <h3>- {quote.name}</h3>
  
        </div>


    </div>
  )
}


export default Quote;