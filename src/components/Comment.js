import React from 'react'

const Comment = ({data}) => {
    const {name, text, reply}=data;
  return (
    <div className='flex flex-row bg-gray-100 p-2 shadow-sm rounded-lg my-2'>
        <img alt="user-icon" className='w-12 h-12' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
        <div className='px-3'>
            <p  className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment