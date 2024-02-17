import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { API_KEY } from '../../API/API'

const VideoCart = ({videoData}) => {
 const [channelIcon,setChannelIcon] = useState('');   

async function getChannelDetails(){

     const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${API_KEY}`)
     console.log(response.data);
     setChannelIcon(response.data.items[0].snippet.thumbnails.high.url)
}

 useEffect(()=>{
      getChannelDetails();
 },[])
  return (
    <div className=''>
          <img className='rounded-xl lg:w-full w-[90%]' src={videoData.snippet.thumbnails.high.url} alt="video" />
          <div className="w-[90%]">
              <div className="flex gap-4 mt-2">
                  <Avatar src={channelIcon} size={40} round={true} />
                    <div className="w-[80%]">
                        <p className='font-semibold text-gray-900'>{(videoData.snippet.title).length > 60?(videoData.snippet.title).substring(0,60)+"...":(videoData.snippet.title)}</p>
                        <p className='text-gray-500'>{videoData.snippet.channelTitle}</p>
                    </div>
              </div>
          </div>
    </div>
  )
}

export default VideoCart