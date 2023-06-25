import React from 'react'
import Notes from './Notes';
import { Link } from 'react-router-dom';
import { BiSolidBookAdd } from 'react-icons/bi';


const Home = (props) => {
  return (
    <>
      <div className="flex justify-center p-8 ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
            <div className="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
              <div className="flex flex-col items-start space-y-3">
                <div className="text-3xl md:text-5xl font-bold px-8">
                  Design is a journey of </div>
                <div className="text-3xl text-orange-500 md:text-5xl font-bold px-8">
                  Discovery </div>
                <div className="h-1 rounded-2xl w-20 bg-orange-500 ml-10"></div>
              </div>
              <button className="">
                <Link to={'/notes'}><BiSolidBookAdd className="bg-orange-500 rounded-full text-5xl p-1 text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500" /></Link>
              </button>
            </div>
            <div className="flex space-x-2 md:space-x-6 md:m-4 w-1/2">
              <div className=" w-96 h-60 lg:h-96  overflow-hidden ">
                <img src="https://source.unsplash.com/300x400/?design" className="h-full w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home