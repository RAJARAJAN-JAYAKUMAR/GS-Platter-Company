import React, { useState } from 'react';
import Logo from './HeaderLogo';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


function Navbar({sendData}) {

  let links = [
    {id:1, name: 'HOME', link:'/'},
    {id:2, name: 'PRODUCT', link:'/product'},
    {id:3, name: 'ABOUT', link:'/about'},
    {id:4, name: 'CONTACT US', link:'/contact'},
  ]

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const[isMenuOpen, setMenuOpen] = useState(false)

  
  const menuHandle = () => {
    let menu =  (
     links.map((arr)=>(
      <link to={arr.link}>{arr.name}</link>
     ))
    )
    console.log(menu);
  }
  
  const menuChange = () => {
    setMenuOpen(!isMenuOpen)
  }
  
  return (
    <>
    <nav className='border-2 font-belleza relative sm:flex sm:mx-auto'>

      <div className='py-2 px-2 '>
        <Logo/>
      </div>

      {/* Show menu links only when the hamburger menu is open and screen width -- below 640px */}
      {isMenuOpen && <div className='sm:hidden font-bold mt-2 mb-2 w-full z-50'>
        {links.map((arr)=>(<Link to={arr.link} key={arr.id} className='block p-3 hover:bg-logoGreen hover:text-white' onClick={()=>setMenuOpen(!isMenuOpen)}>{arr.name}</Link>))}
      </div> }

      {/* Show navigation links for screens above 640px */}      <div className='hidden sm:flex sm:grow sm:items-center sm:justify-around '>

          {links.map((arr) => (
            <Link to={arr.link} key={arr.id} className='p-3 hover:bg-logoGreen hover:text-white hover:rounded-xl'>{arr.name}</Link>
          ))}
        </div>
        
      

      <button className=' absolute right-2 top-2 p-2 cursor-pointer text-xl rounded-lg hover:bg-logoGreen hover:text-white sm:hidden' onClick={menuChange}>
          {isMenuOpen? <IoCloseSharp/>:<IoMenu /> }
      </button>

    </nav>
    </>
  );
};

export default Navbar;

{/* <nav className='py-4 px-2 relative border-2 border-red-600'>
    <div> <Logo/></div>
    <div className='absolute top-16 right-8 border-2 border-black'>
    {isMenuBar && links.map((arr) => (<Link to={arr.link} className='right-8 hover:bg-green-800 hover:text-white block' key={arr.name}>{arr.name}</Link>))}
    </div>
  
    <div className='p-4 rounded-xl justify-center items-center text-2xl hover:bg-logoGreen hover:text-white absolute top-0 right-8' >
        {isMenuBar ?<IoCloseSharp onClick={menuChange}/> :<RxHamburgerMenu onClick={menuChange}/> }
    </div>
</nav> */}

// {links.map((arr) => (<Link to={arr.link} className=' hover:bg-green-800 hover:text-white block' key={arr.name}>{arr.name}</Link>))}