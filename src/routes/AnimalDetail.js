import React from 'react'
import { useLocation } from 'react-router-dom';

function AnimalDetail() {
	const location = useLocation();
	const { animal } = location.state || {};
	console.log(animal);
}

export default AnimalDetail;