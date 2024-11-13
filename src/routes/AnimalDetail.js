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
						<div>성별 : {animal.sexCd === 'M' ? "남아" : "여아"}</div>
						<div>보호장소 : {animal.careNm} ({animal.careAddr})</div>
						<div>보호장소 연락처 : {animal.careTel}</div>
						<div>특징 : {animal.specialMark}</div>
					</div>
				</div>
			</div>
			<div className='detail__footer'>
				해당 동물에 대한 문의는 공고번호로 보호 장소에 문의 바랍니다.
			</div>
		</div>
	);
}

export default AnimalDetail;