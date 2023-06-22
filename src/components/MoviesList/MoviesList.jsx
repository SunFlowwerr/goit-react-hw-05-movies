import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, to }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id }) => (
        <Link to={`${to}${id}`} state={{ from: location }}>
          <li key={id}>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  to: PropTypes.string.isRequired,
};
