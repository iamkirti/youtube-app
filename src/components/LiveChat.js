import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomeName, generateRandomId } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage,setLiveMessage]=useState("")

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      console.log("API polling");
      dispatch(
        addMessages({
          name: generateRandomeName(),
          message: generateRandomId(7),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);


  return (
    <div>
<div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      
      {chatMessages.map((chats, i) => (
        <ChatMessage index={i} name={chats.name} message={chats.message} />
      ))}
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
         dispatch(
        addMessages({
          name: "Kirti Sahai",
          message: liveMessage,
        })
      );
      setLiveMessage("")
    }}>
        <input className="w-96" type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="p-2 m-2 bg-green-200" >Send</button>
    </form>
    </div>
    
  );
};

export default LiveChat;
