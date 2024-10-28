import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/animalCard.css';

function AnimalCard({ animal }) {
	const navigate = useNavigate();

	if (!animal || animal === undefined) {
		return null;
	}

	const handleClick = () => {
		navigate(`/animal/${animal.desertionNo}`, { state: { animal } });
	};

	return (
		<div className="animal-card">
			<img src={animal.popfile} alt="1년 전 오늘 입소한 강아지" onClick={handleClick}/>
			<div className='information'>
				<p className="age-sex" onClick={handleClick}>{animal.age.slice(0, 4)}년생 {animal.sexCd === 'M' ? '남아' : '여아'}</p>
				<p className="care-name" onClick={handleClick}>{animal.careNm}</p>
			</div>
		</div>
	);
}

export default AnimalCard;
