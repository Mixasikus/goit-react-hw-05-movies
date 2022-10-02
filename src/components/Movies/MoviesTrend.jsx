import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GetTrending from 'components/Services/GetTrending';

export default function MoviesTrendList() {
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
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
