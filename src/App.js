import { lazy, Suspense } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Loading } from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./pages/Cast/Cast"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
