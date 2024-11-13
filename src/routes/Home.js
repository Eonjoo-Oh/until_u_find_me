import React, { useEffect, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { oneYearDogsState, longestDogsState } from "../atoms/dogsAtoms";
import { fetchOneYearDogs } from "../api/oneYearApi";
import { fetchLongestDog } from "../api/longestApi";
import '../styles/home.css';
import AnimalCarousel from "../components/AnimalCarousel";

const Home = forwardRef((props, ref) => {
  const [oneYearDogs, setOneYearDogs] = useRecoilState(oneYearDogsState);
  const [longestDogs, setLongestDogs] = useRecoilState(longestDogsState);
  const navigate = useNavigate();

  const oneYearSectionRef = useRef(null);
  const longestSectionRef = useRef(null);

  useEffect(() => {
    if (oneYearDogs.length === 0) {
      const fetchData = async () => {
        const oneYearData = await fetchOneYearDogs();
        setOneYearDogs(oneYearData);
      };
      fetchData();
    }
  }, [oneYearDogs, setOneYearDogs]);

  useEffect(() => {
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
  };

  React.useImperativeHandle(ref, () => ({
    scrollToSection: (section) => {
      if (section === 'oneYear' && oneYearSectionRef.current) {
        oneYearSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'longest' && longestSectionRef.current) {
        longestSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }));

  return (
    <div className="home">
      <div ref={oneYearSectionRef}>
        <h2 className="title">오늘로 일 년째, {oneYearDogs.length}마리 친구들이 가족을 기다려요</h2>
        <div className="dogs-card">
          {oneYearDogs.length > 0 ? (
            <AnimalCarousel animals={oneYearDogs} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div ref={longestSectionRef}>
        <h2 className="title">보호소에서 가장 오래 기다린 친구들이에요</h2>
        <div className="dogs-card">
          {longestDogs.length > 0 ? (
            <AnimalCarousel animals={longestDogs} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div>
        <button className='story-btn' onClick={handleStoryClick}>
          <p>1년 1개월만에 새로운 시작을 한</p>
          <p>야미 이야기 보러가기</p>
        </button>
      </div>
    </div>
  );
});

export default Home;
