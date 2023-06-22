import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <Link to={`${id}`}>
          <li key={id}>{title}</li>
        </Link>
      ))}
    </ul>
  );
};
