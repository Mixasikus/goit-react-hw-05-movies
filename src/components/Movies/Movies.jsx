import SearchBar from '../SearchBar/SearchBar';
import MovieList from 'components/Movies/MovieList';
import { Outlet } from 'react-router-dom';

export default function Movies({ onChange, movies }) {
  return (
    <>
      <SearchBar onChange={onChange} />
      <MovieList movies={movies} />
      <Outlet />
    </>
  );
}
