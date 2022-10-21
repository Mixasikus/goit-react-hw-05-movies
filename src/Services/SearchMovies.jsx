import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function fetchQueryMovies(name) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=${name}`
    )
    .catch(r => {
      if (r.data === undefined) {
        toast.error('Ошибка сервера... попробуйте позже.');
      }
    });
}
