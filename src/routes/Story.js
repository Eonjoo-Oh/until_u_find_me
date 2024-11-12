import React from 'react';
import '../styles/story.css'; // CSS 파일이 있다면 추가

function Story() {
	return (
		<div className="story">
			<header className='story__header'>어서와요 기다렸어요!</header>
			<div className='story__content'>
				<div className='story__content__intro'>
					<aside>
						<img src='/images/yumi.jpeg' alt='보호중인 유미' />
					</aside>
					<div className='story__content__intro--text'>
						<p>야미는 태어난 지 3개월인 아기 강아지 시절에 보호소에 들어갔고 성견이 된 1년 1개월 후 입양되었습니다.</p>
						<p>입소하자마자 쓰여진 홍보글 덕분에 야미는 입양될 수 있었지만 홍보글이 없는 야미의 자매 강아지 유미는 아직 입양되지 못하고 있습니다.</p>
						<p>모든 강아지들을 다 홍보할 수 는 없기에 존재조차 알려지지 않고 보호소에서 하염없이 기다림의 시간을 보내는 강아지들이 많습니다. </p>
						<p>어서와요 기다렸어요는 잊혀져가는 장기 보호 중인 유기견들을 알립니다.</p>
					</div>
				</div>


			</div>
		</div>
	);
}

export default Story;
