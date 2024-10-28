import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import '../styles/animalCarousel.css';

function AnmialCarousel({ animals }) {
	const itemToShow = 4;
	const [currentIndex, setCurrentIndex] = useState(itemToShow);

	if (animals.length === 0) {
		return (
			<div className='carousel'>
				<div className='carousel-track--blank'>
					<p>좋은 날이에요!</p>
					<p>1년 전 오늘 보호소에 입소한 강아지가 없어요!</p>
				</div>
			</div>
		);
	}

	if (animals.length < itemToShow) {
		return (
			<div className='carousel'>
				<div className='carousel-track'>
				{animals.map((animal, index) => (
					<AnimalCard key={index} animal={animal} />
				))}
				</div>
			</div>
		)
	}

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
				{infiniteAnimals.slice(currentIndex, currentIndex + itemToShow).map((animal, index) => (
					<AnimalCard key={index} animal={animal} />
				))}
			</div>
			<button onClick={nextSlide} className='next-btn'>{">"}</button>
		</div>
	)
}

export default AnmialCarousel;