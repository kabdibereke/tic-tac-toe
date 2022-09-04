import React, { useState } from "react";
import Square from "./Square";
function calculateWinner(squares) {
	const winningPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winningPatterns.length; i++) {
		const [a, b, c] = winningPatterns[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
const Board = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isX, setIsX] = useState(true);

	const handleClick = (i) => {
		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = isX ? "X" : "O";
		setSquares(squares);
		setIsX(!isX);
	};

	const winner = calculateWinner(squares);
	let status;

	if (winner) {
		status = `Победитель: ${winner}`;
	} else {
		status = "Следующий ход: " + (isX ? "X" : "O");
	}

	const handleRestart = () => {
		setIsX(true);
		setSquares(Array(9).fill(null));
	};

	const renderSquare = (i) => {
		return <Square value={squares[i]} onClick={() => handleClick(i)} />;
	};

	return (
		<>
			<button
				onClick={handleRestart}
				className='bg-white w-fit h-fit p-2 mb-5 mt-11 rounded-[12px] hover:bg-[#F5DEB3]'>
				Очистить
			</button>
			<div className='border-4 border-white border-solid  w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] flex flex-col justify-center items-center '>
				<div className='flex'>
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className='flex'>
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className='flex'>
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
			<div className='text-[16px] mt-5 text-white'>{status}</div>
		</>
	);
};

export default Board;
