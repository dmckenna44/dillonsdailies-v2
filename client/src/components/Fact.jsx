import React, {useState, useEffect} from "react";
import baseURL from '../apiRoute';

const Fact = () => {

  const [fact, setFact] = useState({});

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/today.json?language=en")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setFact(data)
        console.log('response from fact', data)
      })
  }, [])

  return (
    <div className="daily-item-container">
        <div className="daily-item">
          <h3 className="fact-text">{fact.text}</h3>
  
        </div>


    </div>
  )
}


export default Fact;