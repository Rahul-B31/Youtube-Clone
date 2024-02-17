import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../../util/chatSlice';
import { generateRandomMessage, generateRandomNames } from '../../util/helper';

const LiveChat = () => {

  const  messages =  useSelector((state)=>state.chat.message);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const timerID  = setInterval(() => {
           dispatch(setMessage({name:generateRandomNames(),message:generateRandomMessage(18)}))  
       },3000); 

       return (
        ()=>{
          // Clear the Timer
            clearInterval(timerID);
        }
       )
  },[])
  return (
   <div>
   {
      messages.map((msg,index)=>{
        return <ChatMessage item={msg} key={index}/>
      })
   }

   </div>
)
}

export default LiveChat;