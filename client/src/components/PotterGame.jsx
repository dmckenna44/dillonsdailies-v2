import React, {useEffect, useState} from "react";


const PotterGame = () => {

  const [fullData, setFullData] = useState();

  const [correctHouse, setCorrectHouse] = useState('')
  const [correctPatronus, setCorrectPatronus] = useState('')
  const [correctWand, setCorrectWand] = useState('')
  const [correctActor, setCorrectActor] = useState('')

  const [guessHouse, setGuessHouse] = useState('')
  const [guessPatronus, setGuessPatronus] = useState('')
  const [guessWand, setGuessWand] = useState('')
  const [guessActor, setGuessActor] = useState('')


  const getInfo = async () => {
    const info = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await info.json()
    console.log('harry potter info', data);
    data.forEach(char => {
      if (char.patronus) console.log('patronus', char.name, char.patronus)
    })
    data.forEach(char => {
      if (char.house) console.log('house', char.name, char.house)
    })
    data.forEach(char => {
      if (char.wand.wood) console.log('wand', char.name, char.wand.wood)
    })
    data.forEach(char => {
      if (char.actor) console.log('actor', char.name, char.actor)
    })
    setFullData(data)
  }
  useEffect(() => {
    getInfo();
  }, [])

  /* 
    First five? questions: houses
    Next five? questions: wands
    Next five? questions: patronus
    Next five? questions: actor

    Do one character at a time and go through house, wand, patronus and actor
  */

  return (
    <div className="daily-item-container">
        <div className="daily-item">
          <h1>Test Your Harry Potter Knowledge</h1>
          {
            fullData ? 
            <div>
            <input type="radio" id="choice1" name="choiceList"/>
            <label htmlFor="choice1">{fullData[0].name}</label>
            <input type="radio" id="choice2" name="choiceList"/>
            <label htmlFor="choice2">{fullData[1].name}</label>
            <input type="radio" id="choice3" name="choiceList"/>
            <label htmlFor="choice3">{fullData[2].name}</label>
            <input type="radio" id="choice4" name="choiceList"/>
            <label htmlFor="choice4">{fullData[3].name}</label>
            </div>
            :
            null
          }
            
        </div>


    </div>
  )
}


export default PotterGame;


