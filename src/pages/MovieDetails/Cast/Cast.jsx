import GetMovieCredits from 'Services/GetMovieCredits';
import CastList from './CastList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    GetMovieCredits(moviesId).then(setMovies);
  }, [moviesId]);

  if (!movies) {
    return null;
  }
  const cast = movies.data.cast;

  return (
    <div>
      {cast.map(({ profile_path, original_name, id, character }) => (
        <ul key={id}>
          <CastList
            image={profile_path}
            name={original_name}
            character={character}
          />
        </ul>
      ))}
    </div>
  );
}
