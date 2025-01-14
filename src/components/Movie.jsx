import React from 'react'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie( {title, poster_path, vote_average}) {
  return (
    <div className='movie-container'>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <div className="movie-info">
        <div className="info-row">
          <h4>제목 : </h4>
          <span>{title}</span>
        </div>
        <div className="info-row">
          <h4>평점 : </h4>
          <span>{vote_average}</span>
        </div>
      </div>
    </div>
  )
}
