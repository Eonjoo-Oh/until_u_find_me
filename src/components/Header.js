import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<h1>어서와요 기다렸어요</h1>
				<h3 className='sub-title'>until you find me</h3>
			</div>
			<nav className='navigation'>
				<div className='nav-buttons'>
					<button className='nav-button'>1주년</button>
					<button className='nav-button'>가장 오래 기다린</button>
					<button className='nav-button'>소개글</button>
				</div>
			</nav>
		</header>
	)
}

export default Header;