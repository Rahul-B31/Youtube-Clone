import React, { useState } from 'react'
import  { GiHamburgerMenu } from 'react-icons/gi'
import  { IoIosNotificationsOutline } from 'react-icons/io'
import  { CiVideoOn } from 'react-icons/ci'
import  {CiSearch} from 'react-icons/ci'
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux'
import { setCategory, toogleSidebar } from '../../util/appSlice'


const Navbar = () => {

    const dispatch = useDispatch();   
    const [searchText,setSearchText] = useState('');

    function HandleMenuToogler(){

      dispatch(toogleSidebar());

    }

    function handleSearch(){
         dispatch(setCategory(searchText));
         setSearchText('')
    }
  return (
      <header>
          <nav className='w-full flex justify-between px-4 py-2 fixed bg-white top-0 left-0 right-0 z-20'>
               {/* Menu  */}
                <div className="flex items-center">
                    <GiHamburgerMenu onClick={HandleMenuToogler} size={35} className='cursor-pointer'/>
                    <img src="yt-logo.png" alt="frfr" width={150} className='px-5'/> 
                </div> 

                {/* Search Bar */}
                <div className="flex items-center w-[40%]">
                      <div className="w-full border border-gray-300 rounded-l-full  ">
                          <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search' className='outline-none rounded-full py-2 px-4  w-[100%] '  />
                      </div>
                      <button className='rounded-r-full border py-2 px-5 border-gray-300' onClick={handleSearch}><CiSearch size={24}/></button>
                </div>

                {/* notication video  option */}
                <div className="flex items-center w-[20%] justify-end gap-4">
                    <IoIosNotificationsOutline size={25}/>
                    <CiVideoOn size={25}/>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9q1tHxDvv6QJqPmlvUze-Q48FM8WtCXZJEWg-KTyeVdYhhsSGE0z_cLnzw2z2IDBO9u0&usqp=CAU' size={40} round={true} />
                </div>

          </nav>
      </header>
  )
}

export default Navbar