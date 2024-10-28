import React from 'react';
import AnimalCard from './AnimalCard';
import '../styles/animalCarousel.css';

function FewOneYear({ animals }) {
	return (
		<div className='carousel'>
			<div className='carousel-track'>
				{animals.map((animal, index) => (
					<AnimalCard key={index} animal={animal} />
				))}
			</div>
		</div>
	);
}

export default FewOneYear;
