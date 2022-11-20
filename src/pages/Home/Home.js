import { Notify } from "notiflix";
import { useState, useEffect } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { ButtonAddTransactions } from "../../components/ButtonModal/ButtonModal";
import * as getApi from "../../services/Api";

import s from "./Home.module.css";

export const Home = () => {
  const [countPage, setCountPage] = useState(1);
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await getApi.fetchTrending(countPage);

        setMovies(results);
      } catch (e) {
        Notify.info("Pleas enter the name of movie");
      }
    };
    fetch();
  }, [countPage]);

  return (
    <div className={s.homepage}>
      <h2 className={s.title}>Trending today</h2>
      <MovieList movies={movies} />
      <ButtonAddTransactions  />
    </div>
  );
};

export default Home;
