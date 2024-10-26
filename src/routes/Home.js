import { useState, useEffect } from "react";
import { fetchOneYearDogs } from "../api/oneYearApi";
import { fetchOldestDog } from "../api/oldestApi";
import AnimalCard from "../components/AnimalCard";
import AnmialCarousel from "../components/AnimalCarousel";

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
	console.log("oneYear length: ,", oneYearDogs.length);

	return (
		<div>
			<h2 className="one-year-title">오늘이 보호소 입소 1주년이에요</h2>
			<div className="animal-cards">
				{oneYearDogs.length > 0 ? ( <AnmialCarousel animals={oneYearDogs} />) : ( <p>Loading...</p>)}
				{/* {oneYearDogs.length > 0 ? ( <AnimalCard animal={oneYearDogs[0]} />) : ( <p>Loading...</p>)} */}
			</div>
		</div>
	);
	// console.log("oldestDogs: ", oldestDogs);
}

export default Home;