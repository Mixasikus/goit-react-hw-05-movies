import GetMovieReviews from 'Services/GetMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    GetMovieReviews(moviesId).then(setMovies);
  }, [moviesId]);

  if (!movies) {
    return null;
  }
  const authors = movies.data.results;
  return (
    <>
      {authors.length > 0 ? (
        <div>
          {authors.map(({ author, id, content }) => (
            <div key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
}
