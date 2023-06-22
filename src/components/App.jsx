import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Loader } from './Loader';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="movies" element={<Movies></Movies>}></Route>
          <Route path="movies/:movieId" element={<MovieDetails></MovieDetails>}>
            <Route path="cast" element={<Cast></Cast>}></Route>
            <Route path="reviews" element={<Reviews></Reviews>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
