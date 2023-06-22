const API_KEY = 'a20001fba40fff44345e5993730d4bd9';
const BASE_URL = 'https://api.themoviedb.org/3/';

function fetchError(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No matches with entered data'));
  });
}

export function fetchTrandingMovies() {
  return fetchError(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMovieDetails(movieId) {
  return fetchError(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMoviesByInput(input) {
  return fetchError(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${input}&page=1&include_adult=true`
  );
}

export function fetchMoviesCast(movieId) {
  return fetchError(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
}
