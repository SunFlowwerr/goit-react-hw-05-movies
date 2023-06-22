import { fetchTrandingMovies } from 'source/movie-api';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <div>
      <h1>Tranding movies</h1>
      <MoviesList movies={movies} to={'movies/'}></MoviesList>
    </div>
  );
};

export default Home;
