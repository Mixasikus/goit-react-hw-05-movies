import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import fetchQueryMovies from 'Services/SearchMovies';

export default function Movies() {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchImage, setSearchImage] = useState(query);

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
  return (
    <>
      <main>
        <SearchBar onChange={handleFormSubmit} />
        {movies.length > 0 && (
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Outlet />
      </main>
    </>
  );
}
