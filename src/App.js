import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/Tv';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';

function AppContent() {
  const location = useLocation();

  // Header를 숨길 경로 설정
  const hideHeaderPaths = ['/login'];

  return (
    <>
      {/* 특정 경로에서 Header 숨기기 */}
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
