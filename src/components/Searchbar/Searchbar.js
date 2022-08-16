import s from "./Searchbar.module.css";
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import { useState } from "react";

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
 
  const handleSubmit = e => {
    e.preventDefault();

    if(inputValue.trim() === ''){
     
      return;
    }
    onSubmit(inputValue);
    setInputValue('');    
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} >
      <input
        className={s.input}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
