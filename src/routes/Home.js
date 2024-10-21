import { useState, useEffect } from "react";

function Home() {
	const [animals, setAnimals] = useState([]);
	const oneYearAgo = new Date();
	oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
	const oneYearAgoDate = oneYearAgo.toISOString().split('T')[0].replace(/-/g, '');
	let page = 1;

	const getAnimals = async() => {
		const apiKey = process.env.REACT_APP_ANIMAL_API_KEY;
		const baseUrl = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=${oneYearAgoDate}&endde=${oneYearAgoDate}&upkind=417000&numOfRows=100&state=protect&kind-417000&serviceKey=${apiKey}&_type=json`;
		//토탈카운트가 100개 이상이면 pageno를 넘겨서 fetch하는 로직 필요
		let response = await fetch(`${baseUrl}&pageNo=${page}`);
		let json = await response.json();
		const totalCount = json.response.body.totalCount;
		console.log(totalCount);
		let tempAnimal = [];
		tempAnimal.push(...json.response.body.items.item);
		
		if (totalCount > 100) {
			console.log("here");
			page = 2;
			while(page <= Math.ceil(totalCount / 100)) {
				response = await fetch(`${baseUrl}&pageNo=${page}`);
				json = await response.json();
				tempAnimal.push(...json.response.body.items.item);
				page++;
			}
		}
	
		setAnimals(tempAnimal);
	};

	useEffect(() => {
		getAnimals();
	  }, []);

	console.log(animals);
	
}

export default Home;