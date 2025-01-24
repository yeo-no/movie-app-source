import React, { useEffect, useState } from 'react'
import Movie from '../components/Movie';
import { dummy } from '../movieDummy';
import axios from 'axios';



export default function Movies() {
  //비구조화 할당, tk
  const [movies, setMovies] = useState([]);
  // 데이터 호출
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${MOVIE_API_KEY}`
          }
        });
        setMovies(response.data.results); // API 응답 데이터 저장
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []); // 컴포넌트 마운트 시 1회 실행

  return (
    <div>
      <div className="movies-container">
        {movies && movies.length > 0?
          (movies.map((item)=>{
            return(
              <Movie
                key={item.id}
                title={item.title}
                overview={item.overview}
                poster_path={item.poster_path}
                vote_average={item.vote_average.toFixed(1)+'점'}
              />
            );
          }))
          :
          ( <p>Loading...</p>)
       }
      </div>
    </div>
  );
}
