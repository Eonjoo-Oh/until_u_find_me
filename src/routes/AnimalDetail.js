import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/animalDetail.css';

function AnimalDetail() {
	const location = useLocation();
	const { animal } = location.state || {};
	console.log(animal);
	return (
		<div className='detail'>
			<div className='detail__content'>
				<div className='detail__content__img'>
					<img src={animal.popfile} alt="사진" />
				</div>
				<div className='detail__content__info'>
					<div className='detail__content__info__header'>
						안녕하세요☺️ 저를 발견해주셔서 감사해요
					</div>
					<div className='detail__content__info__text'>
						<div>공고번호 : {animal.noticeNo}</div>
						<div>나이 : {animal.age.slice(0, 4)}년생</div>
						<div>공고번호 : {animal.noticeNo}</div>
						<div>공고번호 : {animal.noticeNo}</div>
						<div>공고번호 : {animal.noticeNo}</div>
					</div>
				</div>
			</div>
			<div className='detail__footer'>

			</div>
		</div>
	);
}

export default AnimalDetail;