import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache=useSelector(store=>store.search);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchQueryResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQueryResults = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/" + YOUTUBE_SEARCH_API + searchQuery
    );
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1] || ["apple", "banana", "carrot"]);
    dispatch(cacheResults({[searchQuery]:suggestions }));
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (value) => {
  console.log("Selected:", value);
  setSearchQuery(value);
  setShowSuggestions(false);
};

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="hamburger icon"
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="">
          <img
            alt="youtube logo"
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-48">
        <input
          type="text"
          className="w-1/2 border border-gray-400 py-2 px-5 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          //rem this: This gives React a chance to handle the onClick on the list item before hiding suggestions.
          onBlur={() => setTimeout(()=>setShowSuggestions(false),1000)}
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
          🔍
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="border border-slate-500 shadow-lg w-[33.7rem] rounded-lg absolute bg-white py-2 px-5">
            <ul className="text-lg ">
              {showSuggestions &&
                suggestions.map((s) => {
                  return (
                    <li
                      key={s}
                      className="flex items-center gap-2 p-3 hover:bg-slate-200 cursor-pointer" onClick={()=>handleSearch(s)}
                    >
                      <svg
                        className="w-5 h-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z" />
                      </svg>
                      {s}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
        {/* <div className="border border-slate-500 shadow-lg w-[33.7rem] rounded-lg fixed bg-white py-2 px-5">
          <ul className="text-lg ">
            <li className="flex items-center gap-2 p-3 hover:bg-slate-200 cursor-pointer">
              <svg
                className="w-5 h-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z" />
              </svg>
              iphone 111
            </li>

            <li className="p-3 hover:bg-slate-200">Iphone</li>
            <li className="p-3">Iphone</li>
            <li className="p-3">Iphone</li>
            <li className="p-3">Iphone</li>
            <li className="p-3">Iphone</li>
            <li className="p-3">Iphone</li>
          </ul>
        </div> */}
      </div>

      <div className="col-span-1">
        <img
          alt="user-icon"
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
