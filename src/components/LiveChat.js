import React,{useEffect} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import store from '../utils/store';

const LiveChat = () => {
    const dispatch=useDispatch();

    const chatMessgaes=useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const i=setInterval(()=>{
            //API polling
            console.log("API polling");
            dispatch(addMessages({
                name:"Kirti Sahai",
                message:"lorem lipsum dolor"
            }))

        },2000);

        return ()=>clearInterval(i)
    },[])
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
        <ChatMessage name="Kirti Sahai" message="This is Youtube"/>
    </div>
  )
}

export default LiveChat