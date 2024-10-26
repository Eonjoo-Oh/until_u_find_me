import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import '../styles/animalCarousel.css';

function AnmialCarousel({ animals }) {
	const itemToShow = 4;
	const [currentIndex, setCurrentIndex] = useState(itemToShow);
	
	// animals가 없거나, itemToShow보다 작은 경우 처리방법 추가해야됨
	// if (animals.length === 0) {
	// 	return (
	// 		<div className='blank-animal'>
	// 			{"좋은날이에요! 일년 전 오늘 입소한 친구들이 없어요"}
	// 		</div>
	// 	);
	// }
	// (animals.length < 4 ? itemToShow = animals.length : itemToShow = 4)

	const infiniteAnimals = [...animals.slice(-itemToShow), ...animals, ...animals.slice(0, itemToShow)];
	console.log("infiniteAnimals : ", infiniteAnimals)

	const prevSlide = () => {
		setCurrentIndex((prevIdx) => 
			prevIdx === 0 ? Math.floor(animals.length - 1) : prevIdx - 1
		);
	}; 
	const nextSlide = () => {
		setCurrentIndex((nextIdx) => 
			infiniteAnimals.length - currentIndex === itemToShow ? itemToShow : currentIndex + 1
		);
	};
	console.log("currentIdx: ", currentIndex);
	return (
		<div className='carousel'>
			<button onClick={prevSlide} className='prev-btn'>{"<"}</button>
			<div className='carousel-track'>
				{/* 배열하나 만들어서 그 배열에 채워넣기 */}
				{infiniteAnimals.slice(currentIndex, currentIndex + itemToShow).map((animal, index) => (
					<AnimalCard key={index} animal={animal} />
				))}
			</div>
			<button onClick={nextSlide} className='next-btn'>{">"}</button>
		</div>
	)
}

export default AnmialCarousel;