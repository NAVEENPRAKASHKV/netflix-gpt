import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
 
  return (
    <div className=" px-6 text-2xl">
        <h1 className="text text-white px-6 pb-2">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar   " >
      <div className="flex px-4 pb-8 ">
        {movies.map((movie) => (
           <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
        </div>
      </div> 
    </div>
  ); 
};

export default MovieList;
