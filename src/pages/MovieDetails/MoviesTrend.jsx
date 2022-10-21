import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GetTrending from 'Services/GetTrending';

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
      <h1>Trending Today</h1>
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
