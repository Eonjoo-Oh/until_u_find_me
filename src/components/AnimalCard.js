import React from 'react';
import '../styles/animalCard.css';

function AnimalCard({ animal }) {
	console.log("animal: ", animal)
	console.log(animal.popfile);
	if (!animal || animal === undefined) {
		return null;
	}
	return (
		<div className="animal-card">
			<img src={animal.popfile} alt="1년 전 입소한 강아지"/>
			<div className='information'>
				<p className="age-sex">{animal.age}년생 {animal.sexCd === 'M' ? '남아' : '여아'}</p>
				<p className="care-name">{animal.careNm}</p>
			</div>
		</div>
	)
}

export default AnimalCard;