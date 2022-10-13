import SearchBar from '../SearchBar/SearchBar';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchQueryMovies from 'components/Services/SearchMovies';

export default function Movies() {
  const location = useLocation();
  const [searchImage, setSearchImage] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
    setSearchParams(searchImage !== '' ? { query: searchImage } : query);
  };
  // console.log(searchImage);
  return (
    <>
      <main>
        <SearchBar onChange={handleFormSubmit} />
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </main>
    </>
  );
}
