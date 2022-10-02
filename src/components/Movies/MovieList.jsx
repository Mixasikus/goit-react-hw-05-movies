import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
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
