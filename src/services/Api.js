import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cd663ecb08f749a7c516ed1131752030'; 

export const URL_IMG = "https://image.tmdb.org/t/p/w500";

export const fetchTrending = async () => {
  return await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  ;
}

export const searchMovie = async queryParam => {
  return await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${queryParam}&language=en-US&page=1&include_adult=false`);
}


export const fetchMovieDetails = async movieId => {
 return await axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export const fetchCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async movieId => {
 const response = await axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
 return response.data.cast;
}




