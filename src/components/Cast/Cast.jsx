import { fetchMoviesCast } from 'source/movie-api';
import { useState, useEffect } from 'react';

export const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  console.log(movieId);
  useEffect(() => {
    fetchMoviesCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, name, character }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
