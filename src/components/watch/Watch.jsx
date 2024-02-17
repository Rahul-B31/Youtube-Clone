import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../../API/API';
import Avatar from 'react-avatar';

import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import {PiShareFatLight} from 'react-icons/pi'
import {GoDownload} from 'react-icons/go'
import { BsThreeDotsVertical} from 'react-icons/bs'
import { LuSendHorizonal} from 'react-icons/lu'
import LiveChat from '../Feed/LiveChat';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../util/chatSlice';

const Watch = () => {
  const [videoInfo,setVideoInfo] = useState(null);  
  const [serachParam] =  useSearchParams();
  const id = serachParam.get('v')


  const [ChatMessage,setChatMessage] = useState('');  
  const dispatch = useDispatch(); 

   async function getVideoInfo(){
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`);
            console.log(response.data.items[0])
            setVideoInfo(response?.data?.items[0])
        }catch(error){
             console.log(error)
        }
    }

       useEffect(()=>{
          getVideoInfo();
       },[]);



     function sendMessage(){
        if(ChatMessage!=''){
            dispatch(setMessage({name:'Rahul',message:ChatMessage})); 
            setChatMessage('');  
        }
        else{
               alert("Add the meassge");
        }
     }  
  return (
    <main className='mx-3 flex w-full flex-col lg:flex-row'>
          {/* Video Section */}
          <section className="">
            <iframe width="700" height="350" 
                src={`https://www.youtube.com/embed/${id}?si=mKVctHHfktUtGw5F`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; ; web-share" allowFullScreen>
            </iframe>  
            <h2 className='text-gray-900 text-xl font-semibold mt-4 w-[670px]'>{videoInfo?.snippet.title}</h2>  

            <div className="flex justify-between items-center gap-1 w-[700px]">

                 <div className="flex gap-4 items-center ">
                      <div className="flex gap-3 mt-3">
                        <Avatar src={`data:image/jpeg;base64,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`} size={40} round={true} />
                        <div className="flex flex-col justify-center">
                            <p className='font-semibold text-gray-700 text-base'>{videoInfo?.snippet?.channelTitle}</p>
                            <p className='text-sm text-gray-500'>Subscriber count</p>
                        </div>

                      </div>
                      <button className='bg-black font-semibold rounded-full h-[2rem] px-4  text-white'>Subscribe</button>
                 </div>

                 <div className="flex gap-5 items-center">
                    

                    {/* Linke and dislike button */}
                     <div className="flex bg-gray-200 py-1 px-3 rounded-full gap-2">
                        <AiOutlineLike size={20} className='cursor-pointer'/>
                        <span>{videoInfo?.statistics?.likeCount}</span>
                        <AiOutlineDislike size={20}/>
                     </div>

                     {/* Share Button */}
                     <div className="flex bg-gray-200 py-1 px-3 rounded-full gap-2 cursor-pointer">
                        <PiShareFatLight size={20}/>
                        <span className='text-sm'>Share</span>
                     </div>
                     
                     {/* Download button */}
                     <div className="flex bg-gray-200 py-1 px-4 rounded-full gap-2 cursor-pointer">
                         <GoDownload size={20}/>
                         <span className='text-sm'>Download</span>
                     </div>
                 </div>
            </div>
          </section>

          {/* Live Chatting Section */}
          <section className='w-[100%] ml-4 border  border-slate-400 rounded-lg h-fit p-2'>
               <div className="flex justify-between border-b border-gray-500 mt-2 py-1">
                     <h2 className='ml-2'>Top Chat</h2>
                     <BsThreeDotsVertical/>
               </div>

               <div className="overflow-y-auto h-[70vh] flex flex-col-reverse">
                   <LiveChat/>
               </div>

               <div className="">
                     <div className="flex gap-3 py-2 border-t ">
                          <div className="">
                               <Avatar src={`data:image/jpeg;base64,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`} size={40} round={true} />
                          </div>
                          <input type="text" value={ChatMessage} onChange={(e)=>setChatMessage(e.target.value)} className='outline-none border-b border-b-blue-500' placeholder='Send Meassge'  />
                          <button className='bg-gray-300 rounded-full p-2 cursor-pointer' onClick={sendMessage}><LuSendHorizonal size={23} className='text-gray-600 hover:text-gray-700 cursor-pointer'/></button>
                     </div>
               </div>
          </section>

         
    </main>
  )
}

export default Watch