import React from "react";
// import cardgame from "./cardgame";
// import { Link, Switch, Route } from "react-router-dom";
// import AuthContainer from "../Containers/AuthContainer";



function Home({ setUser, name1, name2, getUser, handleChange }) {
  // const renderAuthContainer = () => {
  //   return <AuthContainer setUser={setUser} />;
  // };
  const handleSubmit = (e) =>{
    e.preventDefault();
    getUser(name1,name2)
  }


  

    return (
      <div>
        <h1>Welcome to Capture the Commander</h1>
        <p>
          This is a 2, card game which fuses elements of the games “Memory”,
          “War”, and “Solitaire.” Players use a combination of strategy and luck
          to capture their opponent’s “Commander”.
        </p>
        <form onSubmit = {handleSubmit}>
          <label htmlFor= "player1">Player 1</label>
          <input
            id = "player1"
            name="player1"
            type="text"
            value = {name1}
            placeholder="player 1 enter name"
            onChange = {handleChange}
            required
          /><br/>


          <label htmlFor = "player2">Player 2</label>
          <input
            id = "player2"
            name="player2"
            type="text"
            value = {name2}
            placeholder="player 2 enter name"
            onChange = {handleChange}
            required
          /><br/>

          <input type="submit" value="Start Game" />
        </form>

        {/* <Link to="/cardgame">
          <button className="startButton">Start Game</button>
        </Link> */}
      </div>
    );

  }

export default Home;
