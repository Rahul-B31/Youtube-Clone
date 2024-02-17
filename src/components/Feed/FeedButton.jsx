import React from 'react'

const FeedButton = ({buttonName,active}) => {
  return (
      <button className={`${buttonName==active?'bg-gray-500':'bg-gray-300 hover:bg-gray-400'}   font-semibold rounded-lg py-1 px-2 transition-all ease-in-out duration-100 delay-0`}>{buttonName}</button>
  )
}

export default FeedButton;