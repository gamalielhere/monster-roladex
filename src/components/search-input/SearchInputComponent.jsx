import "./SearchInputComponent.styles.css";

const SearchInputComponent = ({ onSearchChange, classList }) => {
  return (
    <input
      type="search"
      placeholder="search monsters"
      className={`search-box ${classList}`}
      onChange={onSearchChange}
    />
  );
};

export default SearchInputComponent;
