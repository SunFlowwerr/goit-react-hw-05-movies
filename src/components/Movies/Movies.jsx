import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByInput } from 'source/movie-api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState(
    searchParams.get('query') ?? ''
  );
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setSearchString(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchString.trim() === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchString });

    fetchMoviesByInput(searchString).then(movies => setMovies(movies.results));
    setSearchString('');
  };

  useEffect(() => {
    const searchParamsQuery = searchParams.get('query');

    if (!searchParamsQuery) {
      return;
    }

    fetchMoviesByInput(searchParamsQuery).then(movies =>
      setMovies(movies.results)
    );
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={searchString}></input>
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} to={''}></MoviesList>
    </div>
  );
};

export default Movies;
