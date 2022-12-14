import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
