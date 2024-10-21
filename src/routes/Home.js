import { useState, useEffect } from "react";
import { fetchOneYearDogs } from "../api/oneYearApi";

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
}

export default Home;