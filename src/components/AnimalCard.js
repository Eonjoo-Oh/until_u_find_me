import React from 'react';

function AnimalCard({ animal }) {
	console.log("animal: ", animal)
	console.log(animal.popfile);
	if (!animal || animal === undefined) {
		return null;
	}
	return (
		<div className="animal-card">
			<img src={animal.popfile} alt="1년 전 입소한 강아지" style={{ width: '300px', height: '300px', objectFit: 'cover' }}/>
			<p>{animal.age}년생 {animal.sexCd === 'M' ? '남아' : '여아'}</p>
			<p>{animal.careNm}</p>
		</div>
	)
}

export default AnimalCard;