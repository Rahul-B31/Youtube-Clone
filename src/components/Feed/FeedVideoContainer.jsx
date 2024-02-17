import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {YOUTUBE_VIDEO_API,API_KEY} from '../../API/API'
import VideoCart from './VideoCart'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setHomeVideos} from '../../util/appSlice'

const FeedVideoContainer = () => {

     const dispatch = useDispatch();
     
     // Getting the state from the redux store 
     const {videos,category} = useSelector((state)=>state.app)
     const fetchVideos = async ()=>{
          try {
            const response = await axios.get(YOUTUBE_VIDEO_API);
            console.log(response?.data?.items)
            dispatch(setHomeVideos(response?.data?.items))

          } catch (error) {
             console.log("Error Message",error)
          }
  }


   const fetchVideosByCategory = async () =>{
       const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
       console.log("res",response.data);
       dispatch(setHomeVideos(response?.data?.items))
   }
  useEffect(()=>{
      if(category == "All")
         fetchVideos();
      else   
       fetchVideosByCategory();
    
  },[category])

  return (
  <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col mt-3 justify-center gap-6  items-start">

    {
      videos.map((item)=>{
        return (
           <Link to={`/watch?v=${item.id.videoId?item.id.videoId:item.id}`}  key={item.id.videoId?item.id.videoId:item.id} >
                <VideoCart videoData={item}/>
           </Link>
          )
      })
    }
  
  </div>
  )
}

export default FeedVideoContainer