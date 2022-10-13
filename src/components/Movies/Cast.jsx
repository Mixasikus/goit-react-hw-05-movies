import { useState, useEffect } from 'react';
import GetMovieCredits from 'components/Services/GetMovieCredits';
import { useParams } from 'react-router-dom';

export default function Cast() {
  //   const location = useLocation();
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    GetMovieCredits(moviesId).then(setMovies);
  }, [moviesId]);

  if (!movies) {
    return null;
  }
  const cast = movies.data.cast;
  console.log(cast);

  return (
    <>
      {cast.map(({ profile_path, original_name, name, character }) =>
        console.log()
      )}
    </>
  );
}
