import PropTypes from "prop-types";
import ListOfMoviesItem from "./ListOfMoviesItem";

ListOfMovies.propTypes = {
    movies: PropTypes.array,
    onSelectedMovie: PropTypes.func,
  };
  
export default function ListOfMovies({ movies, onSelectedMovie }) {
    return (
      <ul className="list list-movies">
        {movies?.map((movie) => (
          <ListOfMoviesItem
            movie={movie}
            key={movie.imdbID}
            onSelectedMovie={onSelectedMovie}
          />
        ))}
      </ul>
    );
  }