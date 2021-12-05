import "../Search/Search.scss";

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
