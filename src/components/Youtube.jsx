import React from 'react'

const Youtube = () => {
  return (
    <div className='flex justify-center w-full mx-auto'>
        <iframe className='w-full min-h-[300px]' src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=S4-sDUFBQ1YuyUUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Youtube