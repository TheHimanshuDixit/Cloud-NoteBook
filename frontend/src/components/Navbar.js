import React, { useEffect } from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

const Navbar = () => {

  const handlelogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
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
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">cNotebook</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
            <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
            <Link className="mr-5 hover:text-gray-900" to="/notes">Add Notes</Link>
            <Link className="mr-5 hover:text-gray-900" to="/contact">Contact Us</Link>
          </nav>
          <div className='flex'>
            {!localStorage.getItem('token') ?
              <form className="flex">
                <div className='mx-2'><Link className="" to="/signup" role="button">Signup</Link></div>
                <div className='mx-2'><Link className="" to="/login" role="button">Login</Link></div>
              </form> :
              <div className='mx-2'><Link className="" to="#" role="button" onClick={handlelogout}>Logout</Link></div>}
            <a className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none">
              <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" height={25} width={25} className="rounded-full"
                loading="lazy" />
            </a>

          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar