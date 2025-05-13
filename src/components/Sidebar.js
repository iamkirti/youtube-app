import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen=useSelector(state=>state.app.isMenuOpen);

  //early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <h1 className='font-bold'>You</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Tips Official</li>
        <li>Durga Software</li>
        <li>Times Now</li>
        <li>Lord Shiva Songs</li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
        </ul>
    </div>
  )
}

export default Sidebar