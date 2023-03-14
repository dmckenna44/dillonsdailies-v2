import React, {useState, useEffect} from "react";
import { Markup } from "interweave";
import baseURL from '../apiRoute';

const Highlight = () => {

  const [highlight, setHighlight] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/api/highlight`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setHighlight(data)
        console.log('response from highlight', data)
        // parseVideo(highlight.video)
      })
  }, [])

  const parseVideo = (embedString) => {
    let outputStr = '';
    const strArr = embedString.split("'");
    console.log('string array', strArr);
    console.log(strArr[3]);
    return strArr[3];
  }

  

  return (
    <div className="daily-item-container">
        <div className="daily-item">
          <div className="highlight">
            {
              highlight.video ?
              <iframe 
                src={parseVideo(highlight.video)} 
                frameborder="0" 
                width={'100%'} 
                height={'400px'} 
                allow='autoplay' 
                allowFullScreen></iframe>
              : null  
            }

          </div>
          {/* <Markup content={highlight.video} /> */}
  
        </div>


    </div>
  )
}


export default Highlight;