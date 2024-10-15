import { Component } from "react";
// this file is not in isolation as
// css styles are compiled accross of the project
import "./SearchInputComponent.styles.css";
class SearchInputComponent extends Component {
  render() {
    const { onSearchChange, classList } = this.props;
    return (
      <input
        // type="search"
        placeholder="search monsters"
        className={`search-box ${classList}`}
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchInputComponent;
