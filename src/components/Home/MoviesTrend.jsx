import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GetTrending from 'components/Services/GetTrending';

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetTrending().then(response => {
      setMovies(response.data.results);
    });
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <main>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
