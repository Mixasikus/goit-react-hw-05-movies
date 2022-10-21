import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import SharedLayout from './Layout/SharedLayout';

const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetailsSearch = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('../pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetailsSearch />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
