import { useState, useEffect } from "react";
import { fetchOneYearDogs } from "../api/oneYearApi";
import { fetchOldestDog } from "../api/oldestApi";

function Home() {
	const [oneYearDogs, setOneYearDogs] = useState([]);
	const [oldestDogs, setOldestDogs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
		  const oneYearData = await fetchOneYearDogs();
		  setOneYearDogs(oneYearData);
		}
		fetchData();
	  }, []);

	useEffect(() => {
		const fetchData = async () => {
			const oldestData = await fetchOldestDog();
			setOldestDogs(oldestData);
		}
		fetchData();
	}, [])
	console.log("oneYearDogs: ", oneYearDogs);
	console.log("oldestDogs: ", oldestDogs);
}

export default Home;