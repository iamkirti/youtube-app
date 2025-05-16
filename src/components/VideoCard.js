import React from 'react'

const VideoCard = ({info}) => {
console.log(info)

const {snippet, statistics}=info;

const{channelTitle, thumbnails, title}=snippet
  return (
    <div className='p-2 m-2 w-[500px]'>
        <img className='rounded-lg w-full mb-2' alt="thumbnail" src={thumbnails.medium.url}/>
       <ul className='space-y-1'>
        <li className='font-bold whitespace-normal break-words py-1'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
       </ul>



    </div>
  )
}

export default VideoCard