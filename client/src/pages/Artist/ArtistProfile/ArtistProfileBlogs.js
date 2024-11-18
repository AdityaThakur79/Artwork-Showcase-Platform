import React from 'react'
import ArtistProfileMain from './ArtistProfileMain'

const ArtistProfileBlogs = () => {
    return (
        <ArtistProfileMain>
            <div className='text-start ms-12 mt-4'>
                <p className='text-3xl font-roboto font-bold relative'>Blogs
                    <span className='absolute top-5 left-24 bg-green-600 w-48 h-[3px]'></span></p>
            </div>
        </ArtistProfileMain >
    )
}

export default ArtistProfileBlogs
