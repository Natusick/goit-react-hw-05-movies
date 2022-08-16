import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MovieList.module.css";
import { URL_IMG } from "../../services/Api";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={s.list}>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id} className={s.item}>
            <img
              src={URL_IMG + poster_path}
              alt={title}
              width="250"
              className={s.image}
            />
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={s.cardlink}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default MovieList;
