import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { MdAccountCircle } from 'react-icons/md';

const Navbar = (props) => {

  const [account, setAccount] = useState(false)

  const handlelogout = () => {
    localStorage.removeItem('token');
    props.callSuccess('Logout Successfully');
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }

  const onover = () => {
    setAccount(true)
  }
  const onleave = () => {
    setAccount(false)
  }


  const [display, setDisplay] = useState('hidden')

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay("block");
    } else {
      setDisplay("hidden");
    }
  };


  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={` ${display} inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5`} id="btn-back-to-top" onClick={backToTop}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
      </button>

      <header className="text-gray-600 body-font">
        <div className="md:container md:mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">cNotebook</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
            <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
            <Link className="mr-5 hover:text-gray-900" to="/notes">My Notes</Link>
            <Link className="mr-5 hover:text-gray-900" to="/contact">Contact Us</Link>
          </nav>
          <div>
            {!localStorage.getItem('token') ?
              <form className="flex">
                <div className='mx-2'><Link className="" to="/signup" role="button">Signup</Link></div>
                <div className='mx-2'><Link className="" to="/login" role="button">Login</Link></div>
              </form> : <div className='flex'>
                <div className='mx-2'><Link className="" to="#" role="button" onClick={handlelogout}>Logout</Link></div>
                <div className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none">
                  <MdAccountCircle className="text-gray-400 w-6 h-6 mx-2" onMouseOver={onover} onMouseLeave={onleave} />
                  {account && <div onMouseOver={onover} onMouseLeave={onleave} className="absolute right-0 top-11 w-56 mt-2 origin-top-right rounded-md shadow-lg z-50 font-semibold">
                    <div className="py-1 bg-white rounded-md shadow-xs">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Your Profile</Link>
                      <Link to="/mynotes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Your Notes</Link>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Settings</Link>
                      <Link to="#" onClick={handlelogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sign out</Link>
                    </div>
                  </div>}
                </div>
              </div>}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar