import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { oneYearDogsState, longestDogsState } from "../atoms/dogsAtoms";
import { fetchOneYearDogs } from "../api/oneYearApi";
import { fetchLongestDog } from "../api/longestApi";
import '../styles/home.css';
import AnimalCard from "../components/AnimalCard";
import AnmialCarousel from "../components/AnimalCarousel";

function Home() {
  const [oneYearDogs, setOneYearDogs] = useRecoilState(oneYearDogsState);
  const [longestDogs, setLongestDogs] = useRecoilState(longestDogsState);
  const navigate = useNavigate();

  useEffect(() => {
    // oneYearDogs에 데이터가 없을 때만 API 호출
    if (oneYearDogs.length === 0) {
      const fetchData = async () => {
        const oneYearData = await fetchOneYearDogs();
        setOneYearDogs(oneYearData);
      };
      fetchData();
    }
  }, [oneYearDogs, setOneYearDogs]);

  useEffect(() => {
    // longestDogs에 데이터가 없을 때만 API 호출
    if (longestDogs.length === 0) {
      const fetchData = async () => {
        const longestData = await fetchLongestDog();
        setLongestDogs(longestData);
      };
      fetchData();
    }
  }, [longestDogs, setLongestDogs]);

  const handleStoryClick = () => {
	navigate('/story');
  }

  return (
    <div className="home">
      <div>
        <h2 className="title">오늘로 일 년째, {oneYearDogs.length}마리 친구들이 가족을 기다려요</h2>
        <div className="dogs-card">
          {oneYearDogs.length > 0 ? (<AnmialCarousel animals={oneYearDogs} />) : (<p>Loading...</p>)}
        </div>
      </div>
      <div>
        <h2 className="title">보호소에서 가장 오래 기다린 친구들이에요</h2>
        <div className="dogs-card">
          {longestDogs.length > 0 ? (<AnmialCarousel animals={longestDogs}/>) : (<p>Loading...</p>)}
        </div>
      </div>
	  <div>
		<button onClick={handleStoryClick}>스토리 보러가기</button>
	  </div>
    </div>
  );
}

export default Home;