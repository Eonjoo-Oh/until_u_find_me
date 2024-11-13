import React from 'react';
import '../styles/story.css'; // CSS 파일이 있다면 추가

function Story() {
	return (
		<div className="story">
			<header className='story__header'>어서와요 기다렸어요!</header>
			<div className='story__content'>
				<div className='story__content__para'>
					<aside>
						<img src='/images/yami.jpeg' alt='야미의 보호소 시절 사진' />
					</aside>
					<div className='story__content__para--text'>
						<p>야미는 태어난 지 3개월인 아기 강아지 시절에 보호소에 들어갔고 성견이 된 1년 1개월 후 입양되었습니다.</p>
						<p>입소했을 때 쓰인 홍보글 덕분에 늦게나마 야미는 입양될 수 있었습니다.</p>
						<p>성견이 다 되어 입양된 야미는 걱정과는 다르게 가정에 잘 적응해서 행복한 시간을 보내고 있습니다.</p>
					</div>
				</div>
				<div className='story__content__para'>
					<div className='story__content__para--text'>
						<p>하지만 모든 강아지들을 홍보하는 것은 현실적으로 불가능하기 때문에</p>
						<p>야미의 자매 강아지 유미는 아직 입양을 가지 못했습니다.</p>
						<p>존재조차 알려지지 않고 보호소에서 하염없이 기다림의 시간을 보내는 강아지들이 많습니다. </p>
						<p>어서와요 기다렸어요는 잊혀가는 장기 보호 중인 유기견들을 알립니다.</p>
					</div>
					<aside>
						<img src='/images/yumi.jpeg' alt='보호중인 유미' />
					</aside>
				</div>
			</div>
		</div>
	);
}

export default Story;
