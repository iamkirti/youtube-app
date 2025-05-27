import React from "react";

const VideoCard = ({ info, hideViews = false  }) => {
  console.log(info);

  const { snippet, statistics } = info;

  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-[500px]">
      <img
        className="rounded-lg w-full mb-2"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul className="space-y-1">
        <li className="font-bold whitespace-normal break-words py-1">
          {title}
        </li>
        {!hideViews && <li>{channelTitle}</li>}
       {!hideViews && <li>{statistics?.viewCount} views</li>} 
      </ul>
    </div>
  );
};

export const AdVideoCard=({info})=>{
    return <div className="">
        <VideoCard info={info} hideViews={true}/>
        <div className="flex w-full">
        <button className="w-1/2 rounded-full border border-gray-400 bg-white px-6 py-2 m-3 text-blue-600 text-lg">Watch</button>
        <button className="w-1/2 rounded-full bg-blue-300 px-6 py-2 m-3 text-blue-600 text-lg">Try Free</button>
        </div>
        
    </div>
}

export default VideoCard;
