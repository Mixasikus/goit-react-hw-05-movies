import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GetTrending() {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=1'
    )
    .catch(r => {
      if (r.data === undefined) {
        toast.error('Ошибка сервера... попробуйте позже.');
      }
    });
}
