const Square = ({ onClick, value }) => {
	return (
		<button
			onClick={onClick}
			className='w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] border-1 m-[2px] bg-white border-black border-solid hover:bg-[#F5DEB3] text-[50px] sm:text-[100px]'>
			{value}
		</button>
	);
};

export default Square;
