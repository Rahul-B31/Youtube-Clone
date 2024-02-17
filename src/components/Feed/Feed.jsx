import React from 'react'
import FeedButtonList from './FeedButtonList';
import FeedVideoContainer from './FeedVideoContainer';

const Feed = () => {
  return (
      <main className='ml-3 w-[100%]'>
           <FeedButtonList/>
           <div className="">
              <FeedVideoContainer/>
           </div>
      </main>
  )
}

export default Feed;