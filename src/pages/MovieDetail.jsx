import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function MovieDetail() {
  const { title } = useParams();
  const {state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="page-container">
      {/* 화살표 아이콘 */}
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-arrow"
        onClick={() => navigate(-1)} // 뒤로 가기 기능
      />
      <div className="movie-detail-container">
        <img className="movie-detail-img" src={IMG_BASE_URL + state.poster_path} alt="영화 포스터 이미지"/>
        <div className="movie-detail-contents">
          <div className="movie-detail-title">
            {title}
          </div>
          <div className="movie-detail-overview">
              {state.overview}
          </div>
        </div>
      </div>
    </div>
  )
}
