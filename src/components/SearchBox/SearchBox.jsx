import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.containerSearch}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name=""
        onChange={handleChange}
        value={filter}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default SearchBox;
