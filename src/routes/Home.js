import { useState, useEffect } from "react";

function Home() {
	const [animals, setAnimals] = useState([]);
	const oneYearAgo = new Date();
	oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
	const oneYearAgoDate = oneYearAgo.toISOString().split('T')[0].replace(/-/g, '');

	const getAnimals = async() => {
		const apiKey = process.env.REACT_APP_ANIMAL_API_KEY;
		const url = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=${oneYearAgoDate}&endde=${oneYearAgoDate}&upkind=417000&pageNo=1&numOfRows=100&state=protect&kind-417000&serviceKey=${apiKey}&_type=json`;
		//토탈카운트가 100개 이상이면 pageno를 넘겨서 fetch하는 로직 필요
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
		// console.log(json.AbdmAnimalProtect[1].row);
		// setAnimals(json.AbdmAnimalProtect[1].row);
	};

	useEffect(() => {getAnimals()}, []);
	
}

export default Home;