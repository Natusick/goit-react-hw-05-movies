import { useState, useEffect } from "react";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { Loading } from "../../components/Loading/Loading";
import { useSearchParams } from "react-router-dom";
import * as getApi from "../../services/Api";
import { Notify } from "notiflix";
import MovieList from "../../components/MovieList/MovieList";
import s from "./Movies.module.css";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const queryParam = searchParams.get("query") ?? "";

  useEffect(() => {
    if (queryParam === "") {
      Notify.info("Enter the name of the movie");
    }

    setSearchParams({ queryParam });

    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await getApi.searchMovie(queryParam);
        setMovies(results);
      } catch {
        console.log("error");
      }
    };

    fetch();
  }, [queryParam, setSearchParams]);

  const onSearchForm = (queryParam) => {
    setSearchParams({ query: queryParam });
  };

  return (
    <main className={s.seachMovie}>
      <Searchbar onSubmit={onSearchForm} />

      {isLoading && <Loading />}
      {movies && <MovieList movies={movies} />}
    </main>
  );
};
export default Movies;
