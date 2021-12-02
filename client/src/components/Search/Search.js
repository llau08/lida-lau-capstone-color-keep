import "../Search/Search.scss";
import { useState } from "react";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Search;
