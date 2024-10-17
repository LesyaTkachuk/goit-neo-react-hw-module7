import { useId } from "react";
import { MdClear } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import { changeFilter } from "src/redux/filtersSlice";
import { selectNameFilter } from "src/redux/selectors";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const searchId = useId();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleClear = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={css["search-wrapper"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <div className={css["input-wrapper"]}>
        <input
          className={css.input}
          type="text"
          id={searchId}
          autoComplete="off"
          placeholder="Enter name "
          value={nameFilter}
          onChange={handleSearch}
        />
        <button className={css.button} onClick={handleClear}>
          <MdClear className={css.icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
