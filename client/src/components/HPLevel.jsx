import React, {useContext, useEffect, useState} from "react";
import {ScoreContext, LevelContext} from './PotterGame'



const HPLevel = (props) => {

  // props - level(house, wand, patronus or actor), arrays for each option, character
  const {index, level, data, character} = props;
  // create array of choices based on level
  // console.log('level props', level, data, character)

  const {score, setScore} = useContext(ScoreContext)
  const {questionLevel, setQuestionLevel} = useContext(LevelContext)

  const [answer, setAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const [choices, setChoices] = useState([]);
  
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const createChoiceArray = (fullArr) => {
    let arr = fullArr;
    const choiceList = [];
    choiceList.push(character[level])
    arr = arrayRemove(arr, character[level])
    for (let i = 0; i < 3; i++) {
      const choice = arr[Math.floor(Math.random() * arr.length)]
      choiceList.push(choice);
      arr = arrayRemove(arr, choice);
    }
    shuffleArray(choiceList);
    return choiceList;
  };

  const prompt = (level) => {
    if(level === 0) {
      return `What Hogwart's House does ${character.name} belong to?`
    } else if (level === 1) {
      return `What is ${character.name}'s patronus?`
    } else if (level === 2) {
      return `What is ${character.name}'s wand made out of?`
    } else {
      return `Who played ${character.name} in the Harry Potter movies?`
    }
  }
  
  
  useEffect(() => {
    setAnswer(character[level])
    setChoices(createChoiceArray(data[index]))
  }, [level]);

  const checkAnswer = () => {
    console.log('guess', guess);
    console.log('answer', answer)
    if (answer === guess) {
      setScore({
        total: score + 1,
        
      })
      console.log('RIGHT')
    } else console.log('WRONG')
    setQuestionLevel(questionLevel === 3 ? 0 : questionLevel + 1);
  }


  return (
    <div className="hp-level">
      <div className="question-card">
        <div>
          <h2>{character.name}</h2>
          <h4>{prompt(index)}</h4>
          <form action="" onChange={(e) => setGuess(e.target.value)} className="form option-list">
            <div className="form-option">
              <label htmlFor="choice1">{choices[0]}</label>
              <input type="radio" id="choice1" name="choiceList" value={choices[0]}/>
            </div>
            <div className="form-option">
              <label htmlFor="choice2">{choices[1]}</label>
              <input type="radio" id="choice2" name="choiceList" value={choices[1]}/>
            </div>
            <div className="form-option">
              <label htmlFor="choice3">{choices[2]}</label>
              <input type="radio" id="choice3" name="choiceList" value={choices[2]}/>
            </div>
            <div className="form-option">
              <label htmlFor="choice4">{choices[3]}</label>
              <input type="radio" id="choice4" name="choiceList" value={choices[3]}/>
            </div>
          </form>
        </div>
        <button onClick={checkAnswer}>Submit Answer</button>
      </div>
    </div>
  )
}


export default HPLevel;