import useKey from "../hooks/useKey";
import PropTypes from "prop-types";
import { useRef } from "react";

SearchBar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

export default function SearchBar({ query, setQuery }) {
  const inputElement = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
