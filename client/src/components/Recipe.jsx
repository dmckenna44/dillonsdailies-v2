import React, {useState, useEffect} from "react";
import {Markup} from "interweave";
import baseURL from '../apiRoute';

const Recipe = () => {


  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`${baseURL}/api/recipe`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setRecipe(data)
        console.log('response from recipe', data)
      })
  }, [])

  const ingredients = recipe.ingredients ? recipe.ingredients.map(ing => {
    return <li>{ing}</li>
  }) : null;

  return (
    <div className="daily-item-container">
        <div className="daily-item">
          <h1 className="recipe-title">{recipe.dishName}</h1>
          <img src={recipe.imageURL} alt="" className="recipe-img"/>
          <h3>Ingredients</h3>
          {ingredients}
          <h3>Instructions</h3>
          <Markup content={recipe.instructions} />
  
        </div>


    </div>
  )
}


export default Recipe;