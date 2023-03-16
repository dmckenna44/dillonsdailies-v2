import React, {useEffect, useState, createContext, useContext} from "react";
import HPLevel from "./HPLevel";

const LevelContext = createContext(0);
const ScoreContext = createContext({
  total: 0,
  right: 0,
  wrong: 0,
  characters: []
});

const PotterGame = () => {

  const [fullData, setFullData] = useState();
  const [charOptions, setCharOptions] = useState([]);
  const [score, setScore] = useState({});
  const [questionLevel, setQuestionLevel] = useState(0);

  const levels = ['house', 'patronus', 'wand', 'actor'];

  const getInfo = async () => {
    const info = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await info.json()
    const useableData = [];
    const actors = [];
    const wands = new Set();
    const patronus = new Set();
    data.forEach(char => {
      if ((char.wand.wood || char.patronus) && char.actor && char.house) useableData.push(char);
      if (char.wand.wood) wands.add(char.wand.wood);
      if (char.patronus) patronus.add(char.patronus);
      // if (char.house) houseOptions.add(char.house);
      if (char.actor) actors.push(char.actor);
    })
    setCharOptions(useableData.map(char => Object.assign({}, char, {wand: char.wand.wood})));
    setFullData([['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin'], [...patronus], [...wands], actors]);
  }

  useEffect(() => {
    getInfo();
  }, [])


  return (
    <div className="daily-item-container">
        <div className="daily-item">
          <h1>Test Your Harry Potter Knowledge</h1>
          <LevelContext.Provider value={{questionLevel, setQuestionLevel}}>
            <ScoreContext.Provider value={{score, setScore}}>
              {fullData ? <HPLevel index={questionLevel} level={levels[questionLevel]} data={fullData} character={charOptions[0]}/> : null} 
            </ScoreContext.Provider>
          </LevelContext.Provider>
          
          {/* {
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
          } */}
            
        </div>


    </div>
  )
}

export {ScoreContext, LevelContext};
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