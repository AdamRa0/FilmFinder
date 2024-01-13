import PropTypes from "prop-types";

import WatchedMovie from "./WatchedMovie";

WatchedMovieList.propTypes = {
  watched: PropTypes.array,
  onDeleteWatched: PropTypes.func,
};

export default function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          onDeleteWatched={onDeleteWatched}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}
