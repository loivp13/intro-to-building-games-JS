import React from "react";

import Cell from "./Cell";

const Stage = ({ stage }) => {
  return (
    <div className="">
      {stage.map((row) => {
        row.map((cell, x) => {
          return <Cell key={x} type={cell[0]}></Cell>;
        });
      })}
    </div>
  );
};

export default Stage;
