import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'source/movie-api';
import { Link } from 'react-router-dom';
import { Cast } from '../Cast';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie !== null && (
        <div
          style={{
            margin: '30px',
            marginLeft: '40px',
          }}
        >
          <button style={{ marginBottom: '10px' }}>Go back</button>
          <div style={{ display: 'flex' }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : 'No poster'
              }
              alt={movie.original_title}
              width="230px"
            ></img>
            <div style={{ margin: '15px' }}>
              <h2>
                {movie.original_title} ({parseInt(movie.release_date)})
              </h2>
              <p>User score: {parseInt(movie.popularity)}%</p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              {movie.genres.length > 0 ? (
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                  {' '}
                  {movie.genres.map(genre => (
                    <li>{genre.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No genres</p>
              )}
            </div>
          </div>
          <h4>Additional information:</h4>
          <ul>
            <li>
              <Link to="cast" element={<Cast movieId={movieId}></Cast>}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
