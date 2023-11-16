import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

function App() {
  const [lightTheme, setLightTheme] = useState(false);
  const [userPoints, SetuserPoints] = useState(0);
  const [AIPoints, SetAIPoints] = useState(0);
  const [userMove, SetUserMove] = useState("");
  const [AIMove, SetAIMove] = useState("");

  const choices = ["ROCK", "PAPER", "SCISSOR"];

  const rock = document.querySelector(".btn__rock");
  const paper = document.querySelector(".btn__paper");
  const scissor = document.querySelector(".btn__scissor");

  useEffect(() => {
    const body = document.body;
    body.style.background = lightTheme ? "white" : "#242424";
    updatePoints();
    console.log(body);
  }, [userMove, AIMove, lightTheme]);

  const game = (e) => {
    const random = Math.floor(Math.random() * 3);
    SetUserMove(
      e === rock
        ? "rock"
        : e === paper
        ? "paper"
        : e === scissor
        ? "scissor"
        : "error"
    );

    SetAIMove(choices[random]);
  };

  const updatePoints = () => {
    userMove === "rock" && AIMove === "PAPER"
      ? SetAIPoints(AIPoints + 1)
      : userMove === "rock" && AIMove === "SCISSOR"
      ? SetuserPoints(userPoints + 1)
      : userMove === "paper" && AIMove === "ROCK"
      ? SetuserPoints(userPoints + 1)
      : userMove === "paper" && AIMove === "SCISSOR"
      ? SetAIPoints(AIPoints + 1)
      : userMove === "scissor" && AIMove === "PAPER"
      ? SetuserPoints(userPoints + 1)
      : userMove === "scissor" && AIMove === "ROCK"
      ? SetAIPoints(AIPoints + 1)
      : SetAIPoints(AIPoints + 0);

    console.log(userPoints);
  };

  return (
    <div className="app">
      <div className="theme" onClick={() => setLightTheme(!lightTheme)}>
        {lightTheme ? <WbSunnyIcon /> : <Brightness2Icon />}
      </div>
      <div className="player">
        <p>
          <strong>YOU</strong>
        </p>
        <div className="points">{userPoints}</div>
        <Button className="player__btn btn__rock" onClick={() => game(rock)}>
          ROCK
        </Button>
        <Button className="player__btn btn__paper" onClick={() => game(paper)}>
          PAPER
        </Button>
        <Button
          className="player__btn btn__scissor"
          onClick={() => game(scissor)}
        >
          SCISSOR
        </Button>
      </div>
      <div className="player">
        <p>
          <strong>AI</strong>
        </p>
        <div className="points">{AIPoints}</div>
        <p>{AIMove}</p>
      </div>
    </div>
  );
}

export default App;
