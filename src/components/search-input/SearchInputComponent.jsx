import { Component } from "react";

class SearchInputComponent extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <input
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchInputComponent;
