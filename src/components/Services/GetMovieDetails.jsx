import axios from 'axios';

export default function GetMovieDetails(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US`
  );
}
