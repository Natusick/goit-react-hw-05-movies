import PropTypes from "prop-types";
import s from "./MoviesInfo.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { URL_IMG } from "../../services/Api";
import { Suspense } from "react";

export const MoviesInfo = ({ movies }) => {
  

  return (
    <div className={s.movieList}>
      {movies && (
        <div>
          <div className={s.movieCard}>
            <img
              src={URL_IMG + movies.poster_path}
              alt={movies.title || movies.name}
              width="300"
            />
            <div className={s.movieInfo}>
              <h2 className={s.title}>{movies.title || movies.name}</h2>
              <p className={s.text}>
                <b>Release date:</b> {movies.release_date}
              </p>
              <p className={s.text}>
                <b>User Score:</b> {movies.vote_average}
              </p>
              <p className={s.text}>
                <b>Genres:</b>{" "}
                {movies.genres.map((genr) => genr.name).join(" / ")}
              </p>
              <p className={s.text}>
                <b>Runtime:</b> {movies.runtime} min.
              </p>
              <p className={s.text}>
                <b>Overview:</b>
              </p>
              <p className={s.text}>{movies.overview}</p>
            </div>
          </div>
          <hr />
         
            <h3>Additional information</h3>
            <nav className={s.nav}>
              <NavLink
                to={"cast"}
                className={({ isActive }) =>
                  isActive ? `${s.active}` : `${s.inactive}`
                }
              >
                Cast
              </NavLink>
              <NavLink
                to={"reviews"}
                className={({ isActive }) =>
                  isActive ? `${s.active}` : `${s.inactive}`
                }
              >
                Reviews
              </NavLink>
            </nav>
          
          <hr />
        </div>
      )}
      <Suspense fallback={"Loader"}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MoviesInfo.propTypes = {
  movies: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

export default MoviesInfo;
