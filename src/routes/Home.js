import { useState, useEffect } from "react";
import { fetchOneYearDogs } from "../api/oneYearApi";
import { fetchLongestDog } from "../api/longestApi";
import '../styles/home.css';
import AnimalCard from "../components/AnimalCard";
import AnmialCarousel from "../components/AnimalCarousel";

function Home() {
	const [oneYearDogs, setOneYearDogs] = useState([]);
	const [longestDogs, setLongestDogs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
		  const oneYearData = await fetchOneYearDogs();
		  setOneYearDogs(oneYearData);
		}
		fetchData();
	  }, []);

	useEffect(() => {
		const fetchData = async () => {
			const longestData = await fetchLongestDog();
			setLongestDogs(longestData);
		}
		fetchData();
	}, [])
	console.log("oneYearDogs: ", oneYearDogs);
	console.log("longestDogs: ", longestDogs);

	return (
		<div className="home">
			<div>
				<h2 className="title">오늘로 일 년째, {oneYearDogs.length}마리 친구들이 가족을 기다려요</h2>
				<div className="dogs-card">
					{oneYearDogs.length > 0 ? ( <AnmialCarousel animals={oneYearDogs} />) : ( <p>Loading...</p>)}
				</div>
			</div>
			<div>
				<h2 className="title">보호소에서 가장 오래 기다린 친구들이에요</h2>
				<div className="dogs-card">
					{longestDogs.length > 0 ? ( <AnmialCarousel animals={longestDogs} />) : ( <p>Loading...</p>)}
				</div>
			</div>
		</div>
	);
}

export default Home;