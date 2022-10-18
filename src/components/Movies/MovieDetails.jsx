import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import GetMovieDetails from 'components/Services/GetMovieDetails';
import MovieDetailsCard from './MovieDetailsCard';

export default function MovieDetails() {
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
  const httpsPoster = 'https://image.tmdb.org/t/p/w300';

  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      <MovieDetailsCard
        httpsPoster={httpsPoster + poster_path}
        title={title}
        year={year}
        genresMovies={genresMovies}
        voteAverage={vote_average}
        overview={overview}
      />

      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
}
