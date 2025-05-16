import React, { useRef } from 'react'
import Button from './Button'

const Buttonlist = () => {

  const list = [
    "All", "Music", "Mixes", "Amitabh Bhattacharya", "T-Series", "Live",
    "Kriti Sanon", "Selena Gomez", "Interscope Rounds", "Coldplay", "News",
    "Gulshan Kumar", "Dua Lipa", "Podcasts", "Soul Music", "testing"
  ];

  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center px-4 py-2 bg-white shadow-sm overflow-hidden">
      <div
        className="flex overflow-x-auto whitespace-nowrap space-x-2 pr-4 scrollbar-hide flex-1"
        ref={scrollRef}
      >
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="ml-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow flex-shrink-0"
        title="Scroll right"
      >
        ➡️
      </button>
    </div>
  );
}

export default Buttonlist;
