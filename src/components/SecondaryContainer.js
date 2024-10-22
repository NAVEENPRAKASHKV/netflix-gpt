import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-64 pl-12 relative z-20">
          {movies.nowPlayingMovies && <MovieList title={"Now playing "} movies={movies.nowPlayingMovies} />}
          {movies.popularMovies &&<MovieList title={"Popular Moivies  "} movies={movies.popularMovies}/>}
          <MovieList
            title={"Trending Movies "}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror "} movies={movies.nowPlayingMovies} />
         
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
