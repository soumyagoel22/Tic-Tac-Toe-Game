import React, { useState } from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

const Board = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const squares = [...boardState];
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = xIsNext ? "X" : "O";
    setBoardState(squares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <Square value={boardState[index]} onClick={() => handleClick(index)} />
    );
  };

  let status;
  const winner = calculateWinner(boardState);
  const isFill = isFilled(boardState);
  if (winner) {
    status = `Winner is: ${winner}`;
  } else if (!winner && isFill) {
    status = `Game Drawn`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const isFilled = (squares) => {
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      return false;
    }
  }
  return true;
};

const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export { Board };
