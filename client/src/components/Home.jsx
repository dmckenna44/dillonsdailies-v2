import React from "react";
import baseURL from "../apiRoute"



const Home = () => {

  const testPoem = (e) => {
    fetch(`${baseURL}/api/poem`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div className="home-page-container">
      <h1>Dillon's Daily Doses</h1>
      <h3>You've got time to waste, and we're here to help.</h3>
      <div className="main-links-container">
        <a className="main-link" onClick={testPoem}>Poem</a>
        <a href="/quote" className="main-link">Quote</a>
        <a href="/joke" className="main-link">Joke</a>
        <a href="/recipe" className="main-link">Recipe</a>
        <a href="/highlight" className="main-link">Soccer</a>
        <a href="/fact" className="main-link">Fact</a>

      </div>
    </div>
  )
}

export default Home;