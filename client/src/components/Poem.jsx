import React, { useEffect, useState } from "react";
import baseURL from '../apiRoute';


const Poem = () => {

  const [poem, setPoem] = useState();

  useEffect(() => {
    fetch(`${baseURL}/api/poem`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPoem(data)
        console.log('response from poem', data)
      })
  }, [])

  const lines = poem ? poem.content.map(line => {
    return line !== "" ? <p>{line}</p> : <br/>;
  }) : [];

  return (
    <div className="daily-item-container">
      {
        poem ?
        <div className="daily-item">
          <h3>{poem.title}</h3>
          <h4>{poem.author}</h4>
          <div className="poem-lines">{lines}</div>
        </div> : null
      }

    </div>
  )
}


export default Poem;