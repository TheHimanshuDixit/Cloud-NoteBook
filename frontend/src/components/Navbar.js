import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {

  const [account, setAccount] = useState(false)

  const handlelogout = () => {
    localStorage.removeItem('token');
    toast.success('Logout successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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


  // let mybutton = document.getElementById("btn-back-to-top");

  // // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }
  // mybutton.addEventListener("click", backToTop);

  // function backToTop() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

  return (
    <>
      <header className="text-gray-600 body-font">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
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
                <Link to={'/notes'} className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none">
                  <MdAccountCircle className="text-gray-400 w-6 h-6 mx-2" onMouseOver={onover} onMouseLeave={onleave} />
                  {account && <div onMouseOver={onover} onMouseLeave={onleave} className="absolute right-0 top-11 w-56 mt-2 origin-top-right rounded-md shadow-lg z-50 font-semibold">
                    <div className="py-1 bg-white rounded-md shadow-xs">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Your Profile</Link>
                      <Link to="/notes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Your Notes</Link>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Settings</Link>
                      <Link to="#" onClick={handlelogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sign out</Link>
                    </div>
                  </div>}

                </Link>
              </div>}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar