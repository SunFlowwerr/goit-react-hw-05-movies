import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'source/movie-api';
import { Link } from 'react-router-dom';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { Loader } from 'components/Loader';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
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
          <Link to={backLinkLocationRef.current}>
            <button style={{ marginBottom: '10px' }}>Go back</button>
          </Link>
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
              <p>User score: {parseInt(movie.vote_average * 10)}%</p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              {movie.genres.length > 0 ? (
                <ul
                  style={{
                    display: 'flex',
                    listStyle: 'none',
                    flexDirection: 'row',
                    gap: '7px',
                    padding: '0px',
                  }}
                >
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
              <Link to="cast" element={<Cast></Cast>}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" element={<Reviews></Reviews>}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loader></Loader>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
