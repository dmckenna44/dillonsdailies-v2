import React, {useState, useEffect} from "react";
import baseURL from '../apiRoute';

const Joke = () => {

  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/api/joke`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setJoke(data)
        console.log('response from joke', data)
      })
  }, [])

  return (
    <div className="daily-item-container">
        <div className="daily-item">
          <h3>{joke.setup}</h3>
          <h3>{joke.punchline}</h3>
  
        </div>


    </div>
  )
}


export default Joke;