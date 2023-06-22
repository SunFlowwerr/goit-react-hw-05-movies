import { fetchMoviesCast } from 'source/movie-api';
import { useState, useEffect } from 'react';

export const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ credit_id, original_name, character }) => (
            <li key={credit_id}>
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
