import { Link, Nav } from './AppBar.module';

export default function AppBar() {
  return (
    <>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
    </>
  );
}
