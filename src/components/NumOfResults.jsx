import PropTypes from "prop-types";

NumOfResults.propTypes = {
  movies: PropTypes.array,
};

export default function NumOfResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}
