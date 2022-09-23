import { Link } from 'react-router-dom';

export default function AppBar() {
  return (
    <header>
      <nav>
        <Link to="home">Home</Link>
        <Link to="movies">Movies</Link>
      </nav>
    </header>
  );
}
