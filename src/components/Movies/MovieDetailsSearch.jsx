import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import GetMovieDetails from 'components/Services/GetMovieDetails';

export default function MovieDetailsSearch() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    GetMovieDetails(moviesId).then(movie => {
      setMovies(movie);
    });
  }, [moviesId]);

  if (!movies) {
    return null;
  }

  const { title, vote_average, release_date, overview, genres, poster_path } =
    movies.data;

  const year = release_date.substring(0, 4);

  const genresMovies = genres.map(genre => genre.name).join(', ');

  const httpsPoster = 'https://image.tmdb.org/t/p/w500';
  // console.log(location.state);
  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      <img src={httpsPoster + poster_path} alt={title} />
      <h1>
        {title}
        <p>{year}</p>
      </h1>
      <p>Popularity {vote_average} </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genresMovies}</p>

      <Link to="cast" state={location.state}>
        Cast
      </Link>

      <Outlet />
    </>
  );
}
