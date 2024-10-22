import React from 'react'

const VideoTitle = (props) => {
  const {title,overview} =props
  return (
    <div className='pt-36 px-14'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-2/5'>{overview}</p>
      <div>
        <button className='bg-gray-800 bg-opacity-50 text-white p-2  w-36 text-xl rounded-lg mx-6'> ▶ Play</button>
        <button className='bg-gray-800 bg-opacity-50 text-white p-2  w-36 text-xl rounded-lg mx-6'>More Info</button>
      </div>
    </div>
    
    
  )
}

export default VideoTitle