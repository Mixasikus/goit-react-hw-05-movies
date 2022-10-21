import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import GetMovieDetails from 'Services/GetMovieDetails';
import MovieDetailsCard from './MovieDetailsCard';
import { BackLink } from 'components/BackLink/BackLink.module';
import { ContainerInfo, Link } from './MovieDetails.module';

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
      <BackLink to={backLinkHref}>Back</BackLink>
      <MovieDetailsCard
        httpsPoster={httpsPoster + poster_path}
        title={title}
        year={year}
        genresMovies={genresMovies}
        voteAverage={vote_average}
        overview={overview}
      />
      <ContainerInfo>
        <p>Additional information</p>
        <Link to="cast" state={location.state}>
          Cast
        </Link>
        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </ContainerInfo>
      <Outlet />
    </>
  );
}
