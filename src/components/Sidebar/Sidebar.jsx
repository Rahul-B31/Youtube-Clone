import React, { useRef } from 'react'
import getSidebarItem from './SidebarItem'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const SidebarItem = getSidebarItem();  
  const open = useSelector((state)=>state.app.open)
  return (
    <aside className='left-0 w-auto ml-3 mt-16 overflow-y-scroll overflow-x-hidden h-[calc(100vh-4.625rem)] relative fie'>
         <div className="flex flex-col gap-3">
            {
               SidebarItem.map((item,index)=>{
                   return (
                      <div key={index} className="flex gap-2 bg-slate-50 rounded-lg p-1 hover:bg-slate-200 mr-4">
                           {item.icons}
                          <p className={`font-semibold ${!open?"hidden":''}`}>{item.title}</p>
                      </div>
                   )
               })
            }  

         </div>
    </aside>
  )
}

export default Sidebar