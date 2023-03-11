import React from "react";



const Home = () => {

  return (
    <div className="home-page-container">
      <h1>Welcome!</h1>
      <div className="main-links-container">
        <a href="/poem" className="main-link">Poem</a>
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