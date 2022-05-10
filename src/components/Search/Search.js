import React from "react";
import styles from "./Search.module.scss"

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form action="" className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={e => {
        setSearch(e.target.value);
        setPageNumber(1)
      }}
        placeholder="Поиск персонажей"
        type="text"
        className={`${styles.input}`}/>
      <button onClick={(e) => {
        e.preventDefault();
      }}
        className={`${styles.btn} btn btn-primary fs-5`}>
        Поиск
      </button>
    </form>
  );
};

export default Search;
