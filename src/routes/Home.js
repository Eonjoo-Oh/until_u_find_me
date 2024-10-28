import { useState, useEffect } from "react";
import { fetchOneYearDogs } from "../api/oneYearApi";
import { fetchOldestDog } from "../api/oldestApi";
import '../styles/home.css';
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
	// console.log("oneYear length: ,", oneYearDogs.length);

	return (
		<div>
			<h2 className="one-year-title">오늘로 일 년째, {oneYearDogs.length}마리 친구들이 가족을 기다려요</h2>
			<div className="one-year-dogs-card">
				{oneYearDogs.length > 0 ? ( <AnmialCarousel animals={oneYearDogs} />) : ( <p>Loading...</p>)}
			</div>
		</div>
	);
	// console.log("oldestDogs: ", oldestDogs);
}

export default Home;