import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import '../styles/animalCarousel.css';

function AnmialCarousel({ animals }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemToShow = 4;

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => 
				prevIndex - itemToShow >= animals.length ? 0 : prevIndex - itemToShow
		);
	};

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => 
				prevIndex + itemToShow >= animals.length ? 0 : prevIndex + itemToShow
		);
	};

	return (
		<div className='carousel'>
			<button onClick={prevSlide} className='prev-btn'>{"<"}</button>
			<div className='carousel-track'>
				{animals.slice(currentIndex, currentIndex + itemToShow).map((animal, index) => (
					<AnimalCard key={index} animal={animal} />
				))}
			</div>
			<button onClick={nextSlide} className='next-btn'>{">"}</button>
		</div>
	)
}

export default AnmialCarousel;