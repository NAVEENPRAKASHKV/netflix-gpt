import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='px-2 w-40'>
        <img alt='Movie Card' src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard