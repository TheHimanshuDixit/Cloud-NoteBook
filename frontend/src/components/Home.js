import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSolidBookAdd } from 'react-icons/bi';
import { Collapse, Ripple, initTE } from "tw-elements";
import LoadingBar from 'react-top-loading-bar'

const Home = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    initTE({ Collapse, Ripple });
    setProgress(100)
  }, []);
  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={800}
      />
      <div className="container m-auto relative overflow-hidden bg-cover bg-no-repeat home mt-2">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed home2" >
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">Heading</h1>
              <h3 className="mb-8 text-3xl font-bold">Subeading</h3>
              <button
                type="button"
                className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div >
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore adipisci voluptatum? Vitae, nesciunt laudantium minus in repudiandae dolor aspernatur..</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="">
                <Link to={'/notes'}><BiSolidBookAdd className="bg-red-500 rounded-full text-5xl p-1 text-white border-2 border-red-500 hover:bg-white hover:text-red-500" /></Link>
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Click here and your notes..</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="./image/benefit-one.png" />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="./image/hero.png" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
            <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
            <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="./image/benefit-two.png" />
          </div>
        </div>
      </section>

      <div className="container my-16 mx-auto md:px-6 xl:px-24">
        <section className="mb-32">
          <h2 className="mb-6 pl-6 text-3xl font-bold text-center underline">Frequently asked questions</h2>

          <div id="accordionFlushExample">
            <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
              <h2 className="mb-0" id="flush-headingOne">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-[red] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button" data-te-collapse-init data-te-target="#flush-collapseOne" aria-expanded="false"
                  aria-controls="flush-collapseOne">
                  Anim pariatur cliche reprehenderit?
                  <span
                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[red] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="flush-collapseOne" className="!visible border-0" data-te-collapse-item data-te-collapse-show
                aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
                <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                  put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                  wes anderson cred nesciunt sapiente ea proident. Ad vegan
                  excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably
                  haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
              <h2 className="mb-0" id="flush-headingTwo">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-[red] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
                  aria-expanded="false" aria-controls="flush-collapseTwo">
                  Non cupidatat skateboard dolor brunch?
                  <span
                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[red] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="flush-collapseTwo" className="!visible hidden border-0" data-te-collapse-item
                aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
                <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                  put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                  wes anderson cred nesciunt sapiente ea proident. Ad vegan
                  excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably
                  haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
              <h2 className="mb-0" id="flush-headingThree">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-[red] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseThree"
                  aria-expanded="false" aria-controls="flush-collapseThree">
                  Praesentium voluptatibus temporibus consequatur non aspernatur?
                  <span
                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[red] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="flush-collapseThree" className="!visible hidden rounded-b-lg" data-te-collapse-item
                aria-labelledby="flush-headingThree" data-te-parent="#accordionFlushExample">
                <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  optio vitae inventore autem fugiat rerum sed laborum. Natus
                  recusandae laboriosam quos pariatur corrupti id dignissimos
                  deserunt, praesentium voluptatibus temporibus consequatur non
                  aspernatur laborum rerum nemo dolorem libero inventore provident
                  exercitationem sunt totam aperiam. Facere sunt quos commodi
                  obcaecati temporibus alias amet! Quam quisquam laboriosam quae
                  repellendus non cum adipisci odio?
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home