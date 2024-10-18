import { useState, useEffect } from "react";

function Home() {
	const [animals, setAnimals] = useState([]);

	const getAnimals = async() => {
		const apiKey = process.env.REACT_APP_ANIMAL_API_KEY;
		const url = `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${apiKey}&Type=json`;

		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
	};

	useEffect(() => {getAnimals()}, []);
	
}

export default Home;