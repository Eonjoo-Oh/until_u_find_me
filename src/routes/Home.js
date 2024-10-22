import { useState, useEffect } from "react";
import { fetchOneYearDogs } from "../api/oneYearApi";
import { fetchOldestDog } from "../api/oldestApi";

function Home() {
	const [oneYearDogs, setOneYearDogs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
		  const oneYearData = await fetchOneYearDogs();
		  setOneYearDogs(oneYearData);
		}
		fetchData();
	  }, []);

	console.log(oneYearDogs);

	fetchOldestDog();
}

export default Home;