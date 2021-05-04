import React from "react";

import { createStage } from "../gameHelpers";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = ({ gameOver, text }) => {
  return (
    <div className="">
      <Stage stage={createStage()}></Stage>
      <aside>
        <div className="">
          <Display text="Score"></Display>
          <Display text="Rows"></Display>
          <Display text="Level"></Display>
        </div>
      </aside>
      <StartButton></StartButton>
    </div>
  );
};

export default Tetris;
