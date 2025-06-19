import React,{useEffect} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomeName, generateRandomId } from '../utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();

    const chatMessages=useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const i=setInterval(()=>{
            //API polling
            console.log("API polling");
            dispatch(addMessages({
                name:generateRandomeName(),
                message:generateRandomId(7)
            }))

        },500);

        return ()=>clearInterval(i)
    },[])
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((chats,i)=>

        <ChatMessage index={i} name={chats.name} message={chats.message}/>
        )}
        
    </div>
  )
}

export default LiveChat