import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { ToastContainer } from 'react-toastify';
import MovieDetailsSearch from './Movies/MovieDetailsSearch.jsx';
import Cast from './Movies/Cast';
import SharedLayout from './Home/SharedLayout';
import NotFound from './Home/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetailsSearch />}>
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
