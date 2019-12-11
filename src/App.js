//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const changeScore = (teamName, amount) => {
    teamName === 'home'? setHomeScore(homeScore + amount) : setAwayScore(awayScore + amount);
  }

  const changeQuarter = () =>{
    setQuarter(quarter % 4 + 1)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow quarter={quarter}/>
      </section>
      <ButtonGroup changeScore={changeScore} changeQuarter={changeQuarter}/>
    </div>
  );
}

function ButtonGroup({changeScore, changeQuarter}){
  return(
    <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => changeScore('home',7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => changeScore('home',3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => changeScore('away',7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => changeScore('away',3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <button onClick={() => changeQuarter()} className="awayButtons__fieldGoal">Change Quarter</button>
      </section> 
  )
}

export default App;

