import React from 'react'
import { CiHome } from 'react-icons/ci'
const Sidebar = () => {
  return (
    <aside className='border border-gray-500'>
         <div className="">

            <div className="flex gap-2">
                <CiHome size={25}/>
                <p className='font-semibold'>Home</p>
            </div>

         </div>
    </aside>
  )
}

export default Sidebar