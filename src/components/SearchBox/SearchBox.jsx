import s from "./SearchBox.module.css";

const SearchBox = ({ onFilter, filter }) => {
  return (
    <div className={s.containerSearch}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name=""
        onChange={(evt) => {
          onFilter(evt.target.value);
        }}
        value={filter}
        placeholder="Enter name..."
      ></input>
    </div>
  );
};

export default SearchBox;
