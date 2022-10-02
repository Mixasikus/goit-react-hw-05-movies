// import MoviesTrend from 'components/Movies/MoviesTrend';
import AppBar from './AppBar';

import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
