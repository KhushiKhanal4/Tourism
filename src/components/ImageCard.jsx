import React from 'react'

function ImageCard(
    {
        url,
        title,
    }
) {

  return (
    <div className='max-w-72 min-[410px]:ml-6  lg:ml-9 xl:ml-20 hover:-translate-y-5 hover:filter  hover:grayscale  cursor-pointer relative group'>
    <img 
      src={url}
      alt=""
      className='rounded-2xl'
    />
  
    <h1  className='z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold font-Kanit text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:text-5xl text-shadow-xl text-center'>
      {title}
    </h1>
  </div>
    
  )
}

export default ImageCard