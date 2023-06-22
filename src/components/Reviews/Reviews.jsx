import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'source/movie-api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <div>
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>There is no reviews yet.</p>
      )}
    </>
  );
};

export default Reviews;
