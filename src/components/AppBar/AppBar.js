import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={s.header}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
        isActive ? `${s.active}` : `${s.inactive}`
      }
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? `${s.active}` : `${s.inactive}`
        }
      >
        Movies
      </NavLink>
    </header>
  );
};

export default AppBar;
