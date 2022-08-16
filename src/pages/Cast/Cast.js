import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_IMG } from "../../services/Api";
import * as getApi from "../../services/Api";
import s from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getApi
      .fetchCast(movieId)
      .then((data) => setCast(data))
      .catch(console.log);
  }, [movieId]);

  return (
    <>
      <ul className={s.listCast}>
        {cast  &&
          cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={s.itemCast}>
              <img src={URL_IMG + profile_path} alt={name} width="200" />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Cast;
