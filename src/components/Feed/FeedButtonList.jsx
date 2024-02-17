import React, { useState } from 'react'
import FeedButton from './FeedButton'
import { setCategory } from '../../util/appSlice'
import { useDispatch } from 'react-redux'

const feedButton = ["All",'JavaScript','Vlogs','Movie','Gaming','Lectures','Java','Live','Music','Songs','Programming','SharkTank','Coding','English']

const FeedButtonList = () => {
 const  dispatch = useDispatch()
const [ active,setActive] = useState("All");

   async function handleActiveState(tagName){
          if(active != tagName){
             dispatch(setCategory(tagName))
             setActive(tagName)
             
          }
  }

  return (
        <div className=" flex gap-3 overflow-x-scroll overflow-y-auto no-scrollbar ml-2 my-3">

                {feedButton.map((buttonName,index)=>{
                     return <div onClick={()=>handleActiveState(buttonName)}><FeedButton  buttonName={buttonName} active={active} key={index}/></div>
                })}
        </div>
  )
}

export default FeedButtonList