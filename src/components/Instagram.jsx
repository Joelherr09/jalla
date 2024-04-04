import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = () => {
  return (
    <div className='flex justify-center w-full mx-auto'>

            <div className='w-full min-h-[300px] max-w[340px] shadow-lg flex mx-auto items-center justify-center shadow-orange-500/50' style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/C4vzIpivaXr/" className='w-full min-h-[300px] mx-auto flex shadow-lg shadow-orange-500/50' width={330}/>
            </div>

    </div>
  )
}

export default Instagram