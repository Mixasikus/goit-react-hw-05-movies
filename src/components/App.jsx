import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { ToastContainer } from 'react-toastify';
import fetchQueryMovies from './Services/SearchMovies';
import MovieDetails from './Movies/MovieDetails.Searchjsx';
import MoviesTrend from './Movies/MoviesTrend';
// import MovieDetailsTrend from './Movies/MoviesTrendDetails';

export const App = () => {
  const [searchImage, setSearchImage] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchImage) {
      return;
    }
    fetchQueryMovies(searchImage).then(response => {
      setMovies(response.data.results);
    });
  }, [searchImage]);

  const handleFormSubmit = searchImage => {
    setSearchImage(searchImage);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MoviesTrend />} />

          <Route
            path="movies"
            element={<Movies onChange={handleFormSubmit} movies={movies} />}
          >
            <Route path=":moviesId" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
