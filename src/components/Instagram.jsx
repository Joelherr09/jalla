import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = () => {
  return (
    <div className='flex justify-center items-center mx-auto pb-3'>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url="https://www.instagram.com/p/C4vzIpivaXr/" width={328} />
            </div>

    </div>
  )
}

export default Instagram