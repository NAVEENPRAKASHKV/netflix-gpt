import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies)
     // early return if no movie in the store . no further execution of code 
     if (!movies || movies.length === 0) return null;  // Safeguard when movies is null or empty

    const mainMovie = movies[0]
    const {original_title,overview,id} =mainMovie
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
        
    </div>
    
  )
}

export default MainContainer