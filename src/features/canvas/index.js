import React, { useEffect, useRef, useState } from "react";
import Paddle from "../paddle";
import "./canvas.css";

export default function Canvas() {
  const [state, setState] = useState({
    gameWidth: 800,
    gameHeight: 600,
  });
  const { gameWidth, gameHeight } = state;
  let canvasRef = useRef(null);

  useEffect(() => {
    let paddle = new Paddle(gameWidth, gameHeight);
    let canvasCxt = canvasRef.current.getContext("2d");
    canvasCxt.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    paddle.draw(canvasCxt);
  }, []);

  return <canvas className="GameScreen" ref={canvasRef}></canvas>;
}
