import React from 'react'
import{ShoppingCartIcon, SearchIcon, MenuIcon} from "@heroicons/react/outline";


function Navbar() {
  return (
    <div className="flex space-x-4 bg-red-950 h-[74px] shadow-lg text-center justify-between items-center px-4">

        <MenuIcon className="h-6 w-6 md:hidden"/>
        <h2 className='text-2xl font-bold'>Skillz</h2>
        <h3 className='hidden text-sm md:block'>Categories</h3>
        <form className='hidden bg-[#f8fafb] md:flex border-black rounded-3xl flex-1 h-12 items-center'>
            <SearchIcon className="h-4 w-4 mx-4 text-gray-400"/>
            <input type='text' placeholder='Search for you courses' className='bg-transparent text-sm outline' />
        </form>
        <h3 className='hidden text-sm lg:block'>Start Gaining Skillz</h3>
        <h3 className='hidden text-sm lg:block md:hidden'>Instructors Lounge</h3>
        <div className='flex'>
            <SearchIcon className='h-6 w-6 text-gray-400 md:hidden'/>
            <ShoppingCartIcon className='h-6 w-6'/>
        </div>
        <div className='hidden md:flex pr-4 space-x-4 justify-end'>
            <button className='border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]'>Log In</button>
            <button className='border bg-black text-white border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]'>Sign Up</button>
        </div>
        </div>
  )
}

export default Navbar;