import React, {useEffect, useState} from "react";


const PotterGame = () => {

  const [fullData, setFullData] = useState();
  const [wandOptions, setWandOptions] = useState([])
  const [patronusOptions, setPatronusOptions] = useState([])
  const [houseOptions, setHouseOptions] = useState([])
  const [actorOptions, setActorOptions] = useState([])

  const [correctHouse, setCorrectHouse] = useState('')
  const [correctPatronus, setCorrectPatronus] = useState('')
  const [correctWand, setCorrectWand] = useState('')
  const [correctActor, setCorrectActor] = useState('')

  const [guessHouse, setGuessHouse] = useState('')
  const [guessPatronus, setGuessPatronus] = useState('')
  const [guessWand, setGuessWand] = useState('')
  const [guessActor, setGuessActor] = useState('')

  const [score, setScore] = useState(0);
  const [questionLevel, setQuestionLevel] = useState(1);


  const getInfo = async () => {
    const info = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await info.json()
    console.log(data);
    const useableData = [];
    const actorOptions = [];
    const wandOptions = new Set();
    const patronusOptions = new Set();
    const houseOptions = new Set();
    data.forEach(char => {
      if ((char.wand.wood || char.patronus) && char.actor && char.house) useableData.push(char);
      if (char.wand.wood) wandOptions.add(char.wand.wood);
      if (char.patronus) patronusOptions.add(char.patronus);
      if (char.house) houseOptions.add(char.house);
      if (char.actor) actorOptions.push(char.actor);
    })

    setFullData(useableData);
    setWandOptions([...wandOptions])
    setPatronusOptions([...patronusOptions])
    setActorOptions(actorOptions);
    console.log(useableData);
    console.log(wandOptions)
  }

  const checkAnswer = () => {
    
  }

  const createQuestion = (character) => {
    if(questionLevel === 1) {


      return (
        <div className="question-card">
          <div>
            <input type="radio" id="choice1" name="choiceList"/>
            <label htmlFor="choice1">Gryffindor</label>
            <input type="radio" id="choice2" name="choiceList"/>
            <label htmlFor="choice2">Hufflepuff</label>
            <input type="radio" id="choice3" name="choiceList"/>
            <label htmlFor="choice3">Slytherin</label>
            <input type="radio" id="choice4" name="choiceList"/>
            <label htmlFor="choice4">Ravenclaw</label>
          </div>
          <button onClick={checkAnswer}>Submit Answer</button>
        </div>
      )
    }
  }

  useEffect(() => {
    getInfo();
  }, [])


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


/*
  1 - get a random character from the list
      - usableData[randomNum] -> arrayRemove(selected character)
      - return the div from the function with the radio inputs, etc
  2 - track which question the game is on, house -> patronus -> wand -> actor
      - useState(questionType)
  3 - when an answer is submitted, update the score and go the next question type
      - useState for score and tracking which answers were correct 
  4 - once the actor answer is submitted, show the player their score 
      for that character and ask if they want to keep playing
  5 - go back to step 1 
*/