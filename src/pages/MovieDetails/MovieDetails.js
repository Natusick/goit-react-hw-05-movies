import { useState, useEffect } from "react";
import {useLocation, useParams, Link } from "react-router-dom";
import { MoviesInfo } from "../../components/MoviesInfo/MoviesInfo";
import * as getApi from "../../services/Api";
import s from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState();
  const location = useLocation();

  useEffect(() => {
    if (movieId === '') {
      return;
    }

    const fetch = async () => {
      try {
        const { data } = await getApi.fetchMovieDetails(movieId);
        setMovies(data);
      } catch (e) {
       console.log('error')
      }
    };
    fetch();
  }, [movieId]);

  const backLinkHref = location.state?.from ?? "/movies";

  return (
    <div className={s.moviePosition}>
      <Link  className={s.btn} to={backLinkHref}>Go back</Link>
      <MoviesInfo movies={movies} />
    </div>
  );
};

export default MovieDetails;
