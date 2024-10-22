import React from 'react'

const VideoTitle = (props) => {
  const {title,overview} =props
  return (
    <div className=' w-screen aspect-video pt-[15%] px-24  absolute text-white bg-gradient-to-b from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='w-2/5 py-6 text-lg '>{overview}</p>
      <div>
        <button className='bg-white  text-black  p-2  w-36 text-xl rounded-lg mx-6 hover:bg-opacity-65'> ▶ Play</button>
        <button className='bg-gray-800  text-white p-2  w-36 text-xl rounded-lg mx-6 hover:bg-opacity-65'>ℹ More Info</button>
      </div>
    </div>
    
    
  )
}

export default VideoTitle