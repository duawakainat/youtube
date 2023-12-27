'use client'
import Image from 'next/image'
import '../app/globals.css'
import Slide from './Navbar'
import Video from './Video'
import Video2 from './Video2'
import "../app/globals.css";
import classNames from "classnames";
import { useState, useRef, useMemo,useEffect } from "react";
import Home from "./icon/home";
import Short from "./icon/short";
import Link from "next/link";
import Subcription from "./icon/subcription";
import { useRouter } from "next/navigation";
import Channel from "./icon/channel";
import History from "./icon/history";
import Video3 from './icon/video3'
import Watch from "./icon/watch";
import HayI from '@/public/peakpx.jpg'
import Slide_1 from './slide'
import You from './icon/you'
import { MediaValues } from 'css-mediaquery'
import Music from './icon/music'
import Reward from './icon/reward'
import Game from './icon/game'
import Square from './icon/square'
import CircleY from './icon/circleY'
 import KidY from './icon/kidY'
 const menuItem5 = [
  { id: 1, Label: "Youtube Premium", icon: Square, link: "./icon/squaree" },
  { id: 2, Label: "Youtube Kids", icon: CircleY, link: "/icon/circleY" },
  { id: 3, Label: "Youtube Music", icon: KidY, link: "/icon/kidY" },
];
const menuItem = [
   { id: 1, Label: "Home", icon: Home, link: "/icon/home" },
   { id: 2, Label: "Short", icon: Short, link: "/icon/short" },
   { id: 3, Label: "Subcription", icon: Subcription, link: "/icon/subcription" },
   {id: 4, Label : "Library", icon: You, link: '/icon/you'}
 ];
 const menuItem2 = [
   { id: 1, Label: "Your Channel", icon: Channel, link: "/icon/channel" },
   { id: 2, Label: "History", icon: History, link: "/icon/history" },
   { id: 3, Label: "Your Video", icon: Video3, link: "/icon/video3" },
   { id: 3, Label: "Watch Later", icon: Watch, link: "/icon/watch" },
 ];
 const menuItem3 = [
   { id: 1, Label: "Kainat Hafeez", image:HayI , link: "../public/peakpx.jpg" },
   { id: 2, Label: "Duawa Kainat", image: HayI , link: "../public/peakpx.jpg" },
   { id: 3, Label: "Yaaho Video", image: HayI , link: "../public/peakpx.jpg" },
   { id: 3, Label: "Develop Later", image: HayI , link: "../public/peakpx.jpg" },
 ];
 const menuItem4 = [
  { id: 1, Label: "Music", icon: Music, link: "/icon/music" },
  { id: 2, Label: "SportS", icon: Reward, link: "/icon/reward" },
  { id: 3, Label: "Gaming", icon: Game, link: "/icon/game" },
];


export default function Main(props) {
   const [toogleCallapse, settoogleCallapse] = useState(false);
   const [isCallapse, setIsCallapse] = useState(false);
   const router = useRouter();
   const activeMenu = useMemo(
     () => menuItem.find((menu) => menu.link === router.pathname),
     [router.pathname]
   );
  
   // let mqsl=window.matchMedia("(max-width: 1200px)")
  
   const wrapperClesses = classNames(
     "h-screen px-4 pt-4 flex justify-between flex-col flex-row items-center sticky right-0 left-0 bg-white top-0 z-50  overflow-y-hidden hover:overflow-y-scroll  lg:block hidden md:hidden sm:hidden max-[630px]:hidden",
     {  ["w-60"]: !toogleCallapse, ["w-20"]: toogleCallapse}
    );
    
   useEffect(() => {
      window.addEventListener("resize", () => {
         if (window.innerWidth <= 1200) {
            settoogleCallapse(!toogleCallapse);
          }
          if (window.innerWidth >= 1200) {
            settoogleCallapse(toogleCallapse);
          }
      })
    },[settoogleCallapse,toogleCallapse])
   const colapseIcon = classNames(
     "p-4 absolute rounded bg-light text-black right-0",
     {
       "rotate-180": toogleCallapse,
     }
   );
   const getNavItemClasess = (menu) => {
     console.log(router.pathname);
     return classNames(
       "flex items-center cursor-pointer hover:bg-gray-100 rounded-md w-full whitespace-nowrap",
       {
         // ["bg-light-lighter"]: activeMenu.id === menu.id
       }
     );
   };
   const onMouseOver = () => {
     setIsCallapse(!isCallapse);
   };
   const handleSidebarToogle = () => {
     settoogleCallapse(!toogleCallapse);
   };
   
    return(
      <div className='h-screen'>
        <div className='grid grid-cols-4 max-[640px]:grid-cols-4 flex items-center border-1 lg:hidden border-t-gray-200 fixed z-50 bottom-0 right-0 left-0 text-center bg-white leading-12' style={{borderTop: '1px solid lightgray'}}>
      {menuItem.map(({icon:Icon, ...menu})=>{
        const classes= getNavItemClasess(menu);
return <div key={menu.id} className={classes}>
  {/* <Link href={menu.link}> */}
    <div className='flex items-center border-t-gray-200 my-1 justify-center w-full'>
      <div>
        <Link href={menu.link}>
          <Icon style={{width: "1.5rem",height: "1.5rem"}}></Icon>
          <span className={classNames('text-[11px] font-medium text-text-light')}>
            {menu.Label}
          </span>
        </Link>
      </div>
    </div>
    {/* </Link> */}
    </div>})} </div>
 <nav className=" w-full lg:shadow-none sm:shadow-md max-[640px]:shadow-md h-14 ">
  <div className="px-3 ">
    <div className="grid grid-cols-6">
      <div className="flex items-center justify-start rtl:justify-end sm:col-span-1 max-[630px]:col-span-2">
      <div className="flex justify-between items-center relative">
          <div className="flex items-center">
      <button className='p-2 lg:block hidden md:hidden sm:hidden max-[630px]:hidden'  onClick={handleSidebarToogle}>
       
    <svg xmlns="http://www.w3.org/2000/svg" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 7H4m16 5H4m16 5H4"></path></svg>
 
      </button>
      <div className='pr-3.5 pl-4' style={{paddingTop: '18px', paddingBottom: '18px'}}>
            <Image src='/YouTube_Logo_2017.svg.png' fluid alt='image' className='h-5 w-20 max-[630px]:w-20 max-[630px]:h-5' width={90} height={20}/>
            </div>
          </div>
        </div>
      </div>
      <form className='lg:col-span-4 md:col-span-5 sm:col-span-5 max-[630px]:col-span-4'>
    <div className="lg:flex justify-center items-center h-14 md:block row">
        <div className="relative lg:w-[460px] md:w-[94%] sm:w-[94%] max-[630px]:w-[94%]">
            <input type="search" id="search-dropdown" className="block lg:w-[460px] md:w-[100%] sm:w-[100%] max-[630px]:w-[100%] inputS  ps-4 pe-1 py-0 h-10 md:h-10 z-20 text-sm text-gray-900 bg-gray-500  rounded-s-full rounded-e-full  bg-white lg:placeholder-gray-400 sm:placeholder-white max-[630px]:placeholder-white dark:text-white" placeholder="Search" required />
            <button type="submit" className="absolute h-10 md:h-10 btn flex justify-center items-center lg:bg-gray-100 md:bg-transparent sm:!bg-transparent max-[630px]:bg-transparent border-l-4 inputS lg:border-[#ccc] md:border-transparent top-0 lg:w-16 md:w-12 sm:w-12 max-[630px]:w-12 rounded-e-full end-0 text-sm font-medium text-[#ccc]">
            <svg xmlns="http://www.w3.org/2000/svg" className='min-[600px]:w-4 h-4' style={{width: '24px', height: '24px'}} viewBox="0 0 24 24" {...props}><path fill="#000" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261l-.707.708ZM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37Z"></path></svg>
   
  </button>
        </div>
              <button type="button" className="text-sm w-12 absolute right-0 top-0 mt-1 max-[600px]:w-6  justify-center rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 lg:hidden sm:flex max-[630px]:flex" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <Image src="/sreejith-kalesh-qTmrnmiEwLQ-unsplash.jpg" alt="user photo" className="w-8 h-8 rounded-full" width={32} height={32}  />
              </button>
        
        <div className=' icon ms-3'>
        <button type="submit" className="flex justify-center items-center w-12 h-10 min-[600px]:h-5 min-[300px]:h-5 lg:h-10 md:h-10  bg-gray-100  border-indigo-500 rounded-full end-0 text-sm font-medium text-[#ccc] lg:flex md:hidden sm:hidden max-[630px]:hidden">
      
    <svg xmlns="http://www.w3.org/2000/svg" className='min-[600px]:min-[600px]:w-4 h-4' style={{width: '24px', height: '24px'}} viewBox="0 0 24 24" {...props}><path fill="black" d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16q2.075 0 3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21h-2Z"></path></svg>
  
        </button>
  </div> 
 
    </div>
</form>
      <div className="lg:flex items-center justify-end col-span-1 md:hidden sm:hidden max-[630px]:hidden">
          <div className="flex justify-between items-center">
          <div className='w-12 h-10 max-[600px]:w-6 flex justify-center items-center'>
{/* <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 16h8v-.55q0-1.1-1.1-1.775T10 13q-1.8 0-2.9.675T6 15.45V16Zm4-4q.825 0 1.413-.587T12 10q0-.825-.587-1.412T10 8q-.825 0-1.412.588T8 10q0 .825.588 1.413T10 12Zm-6 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20H4Zm0-2h12V6H4v12Zm0 0V6v12Z"></path></svg> */}

    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19zm1-1h12V6h-12zm0 0V6zm5.5-2.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3z"></path></svg>
 
</div>
    <div className='w-12 h-10 max-[600px]:w-6 flex justify-center items-center'>
<svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M222.13 67.55a3.94 3.94 0 0 1-1.84.45a4 4 0 0 1-3.55-2.16a99.41 99.41 0 0 0-34.87-38.46a4 4 0 1 1 4.26-6.76a107.34 107.34 0 0 1 37.71 41.54a4 4 0 0 1-1.71 5.39ZM39.26 65.84a99.41 99.41 0 0 1 34.87-38.46a4 4 0 0 0-4.26-6.76a107.34 107.34 0 0 0-37.71 41.54a4 4 0 0 0 1.71 5.39a3.94 3.94 0 0 0 1.84.45a4 4 0 0 0 3.55-2.16ZM218.36 178A12 12 0 0 1 208 196h-44.23a36 36 0 0 1-71.54 0H48a12 12 0 0 1-10.36-18C47.17 161.56 52 139.37 52 112a76 76 0 0 1 152 0c0 27.36 4.83 49.55 14.36 66Zm-62.65 18h-55.42a28 28 0 0 0 55.42 0Zm55.73-14C201.19 164.34 196 140.79 196 112a68 68 0 0 0-136 0c0 28.8-5.19 52.34-15.44 70a4 4 0 0 0 0 4a3.89 3.89 0 0 0 3.44 2h160a3.89 3.89 0 0 0 3.43-2a4 4 0 0 0 .01-4Z"></path></svg>

</div>
            <div>
              <button type="button" className="flex text-sm w-14 max-[600px]:w-6  justify-center rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <Image src="/sreejith-kalesh-qTmrnmiEwLQ-unsplash.jpg" alt="user photo" className="w-8 h-8 rounded-full" width={32} height={32}  />
              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>   
<div className='flex flex-row h-screen justify-start bg-white overflow-y-scroll overscroll-contain'>   
      <div className="flex flex-col sticky right-0 left-0 bg-white top-0 z-50">
    <div className={wrapperClesses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>        
        <div className="flex flex-col items-start">
          {menuItem.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasess(menu);
            return <div key={menu.id} className={classes} >
                <Link href={menu.link}>
                <div className="flex items-center justify-center w-full">
                        
                          {toogleCallapse && (
                            // <Link/>
                            <div className='flex items-center' style={{height: '74px'}}  >
                            <Link href={menu.link}>
                              <Icon style={{width: "1.5rem",height: "1.5rem"}}></Icon>
                              <span className={classNames('text-[10px] font-medium text-text-light')}>
                              {menu.Label}</span></Link></div>
                          )}
                        <div  >
                        {!toogleCallapse && (
                       <div className='px-3 flex items-center' style={{height: '40px'}}>   <div style={{width: '48px'}}><Icon style={{width: "1.5rem"}}/></div>
                            <span className={classNames('text-sm font-medium text-text-light')}>
                                {menu.Label}
                            </span></div>

                        )}
                    </div></div>
                </Link>
                 
            </div>;
          })}
        </div>   
        <ul>   <li className='border-b-[1px] border-gray-300 my-3'></li>

          <li>

            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex me-3 whitespace-nowrap">You</span>
               <svg className="w-3 h-3 text-[#0f0f0f] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="#0f0f0f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
  </svg></a>
       </li>

        </ul>

        <div className="flex flex-col items-start">
          {menuItem2.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasess(menu);
            return <div key={menu.id} className={classes} style={{height: '40px'}}>
                <Link href={menu.link}>
                    <div className="flex px-3 w-full h-full">
                    {!toogleCallapse && (
                           
                        <div className='flex items-center' style={{width: '48px'}}>
                            <Icon style={{width: "1.5rem"}}/>
                        </div>
                        )}
                        {!toogleCallapse && (
                            <span className={classNames('text-sm font-medium text-text-light')}>
                                {menu.Label}
                            </span>
                        )}
                    </div>
                </Link>
                 
            </div>;
          })}
        </div>   
{!toogleCallapse && (
<ul>
<li className='border-b-[1px] border-gray-300 my-3'></li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex me-3 font-medium whitespace-nowrap">Subscription</span>
              
            </a>
         </li>
</ul>)}
<div className="flex flex-col items-start">
          {menuItem3.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasess(menu);
            return <div key={menu.id} className={classes} style={{height: '40px'}}>
                <Link href={menu.link}>
                    <div className="flex px-3 w-full h-full">

                    {!toogleCallapse && (
                           
                        <div style={{width: '48px'}}>
                            <Image src={menu.image} className="rounded-full" alt='image' width={24} height={24} style={{width: "1.5rem" , height: '1.5rem'}}/>
                        </div>
                        )}
                        {!toogleCallapse && (
                            <span className={classNames('text-sm font-medium text-text-light')}>
                                {menu.Label}
                            </span>
                        )}
                    </div>
                </Link>                
            </div>;
          })}
        </div> 

        {!toogleCallapse && (
<ul>
<li className='border-b-[1px] border-gray-300 my-3'></li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex me-3 font-medium whitespace-nowrap">Explore</span>
              
            </a>
         </li>
</ul>)}
<div className="flex flex-col items-start">
          {menuItem4.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasess(menu);
            return <div key={menu.id} className={classes} style={{height: '40px'}}>
                <Link href={menu.link}>
                    <div className="flex px-3 w-full h-full">

                    {!toogleCallapse && (
                           
                           <div className='flex items-center' style={{width: '48px'}}>
                           <Icon style={{width: "1.5rem"}}/>
                       </div>
                        )}
                        {!toogleCallapse && (
                            <span className={classNames('text-sm font-medium text-text-light')}>
                                {menu.Label}
                            </span>
                        )}
                    </div>
                </Link>                
            </div>;
          })}
        </div> 

        <ul>
<li className='border-b-[1px] border-gray-300 my-3'></li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex me-3 font-medium whitespace-nowrap">More From Youtube</span>             
            </a>
         </li>
</ul>
        <div className="flex flex-col items-start">
          {menuItem5.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasess(menu);
            return <div key={menu.id} className={classes} style={{height: '40px'}}>
                <Link href={menu.link}>
                    <div className="flex px-3 w-full h-full">

                    {!toogleCallapse && (
                           
                           <div className='flex items-center' style={{width: '48px'}}>
                           <Icon style={{width: "1.5rem"}}/>
                       </div>
                        )}
                        {!toogleCallapse && (
                            <span className={classNames('text-sm font-medium text-text-light')}>
                                {menu.Label}
                            </span>
                        )}
                    </div>
                </Link>                
            </div>;
          })}
        </div>


      </div>
    </div>
<div className='flex-1 border-l-primary'>
<div className='grid grid-cols-1 sticky right-0 left-0 bg-white top-0 z-50'>
         <Slide/>
      </div>
      <div className='sticky right-0 left-0 top-0 '>
<div className="grid xl:grid-cols-4 min-[2020px]:grid-cols-6 min-[2420px]:grid-cols-8 min-[2220px]:grid-cols-7 min-[1720px]:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 min-[864px]:grid-cols-3 max-[864px]:grid-cols-2 min-[578px]:grid-cols-2 max-[578px]:grid-cols-1 mx-4 my-6 gap-4 mb-4">
       
       <div className='w-100'>  <div className="items-center w-100 justify-center rounded ">
         <Video imageV='https://img.freepik.com/premium-psd/online-cooking-class-promotion-social-media-instagram-post-template_570737-2.jpg?w=740'/>
         </div>
         </div>
         <div className='w-100'>
         <div className="items-center justify-center rounded ">
         <Video imageV='https://img.freepik.com/free-psd/radial-social-media-instagram-facebook-post-template_125755-384.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>         
         </div></div>
         <div className='w-100'>
         <div className="items-center justify-center rounded ">
          <Video imageV='https://img.freepik.com/premium-vector/live-webinar-social-media-post_103645-611.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
         </div></div>
      {/* </div>

      <div className="grid lg:grid-cols-3 mx-4 my-6 md:grid-cols-2 sm:grid-cols-2 max-[600px]:grid-cols-2 gap-4 mb-4"> */}
         <div className="items-center justify-center rounded ">
<Video imageV='https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
            
         </div>
         <div className="items-center justify-center rounded ">
         <Video imageV='https://img.freepik.com/premium-psd/tabligh-akbar-poster-design-template-promotion_693064-312.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
            
         </div>
         <div className="items-center justify-center rounded ">
         <Video imageV='https://img.freepik.com/premium-psd/bus-stop-billboard-mockup_23-2147912068.jpg?size=626&ext=jpg'/>
            
         </div>
         <div className="items-center justify-center rounded ">
         <Video imageV='https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
            
         </div>
         <div className="items-center justify-center rounded "><Video imageV='https://img.freepik.com/premium-psd/psd-music-festival-event-flyer-template-social-media-post-with-red-color-wood-background_507402-603.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>

            
         
      </div></div>
      <div>
{/* <Slide_1/> */}
      </div>
      <div className="grid grid-cols-1 pr-4">
        <Slide_1/>
         {/* <div className="items-center justify-center rounded bg-gray-50 ">
           
           < Video2/>
         </div>
         <div className="items-center justify-center rounded bg-gray-50 ">
            
           < Video2/>
         </div>
         <div className="items-center justify-center rounded bg-gray-50 ">
            
           < Video2/>
         </div>
         <div className="items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            
            <Video2/>
         </div>
        
         <div className="items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            
            <Video2/>
         </div> */}
      </div>


      <div className="grid xl:grid-cols-4 min-[2020px]:grid-cols-6 min-[2420px]:grid-cols-8 min-[2220px]:grid-cols-7 min-[1720px]:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 min-[864px]:grid-cols-3 max-[864px]:grid-cols-2 min-[578px]:grid-cols-2 max-[578px]:grid-cols-1 mx-4 my-6 gap-4 mb-4">
         <div className="items-center justify-center rounded ">
<Video imageV='https://img.freepik.com/free-vector/tiny-developers-programming-website-internet-platform-flat_74855-13517.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
            
         </div>
         <div className="items-center justify-center rounded ">
         <Video imageV='https://img.freepik.com/free-psd/architecture-concept-banner-template_23-2148806739.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
            
         </div>
         <div className="items-center justify-center rounded "><Video
         imageV='https://img.freepik.com/premium-psd/school-admission-social-media-post-template_237398-63.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>

            
         </div>
      {/* </div>

      <div className="grid lg:grid-cols-3 mx-4 my-6 md:grid-cols-2 sm:grid-cols-2 max-[600px]:grid-cols-2 gap-4 mb-4"> */}
         <div className="items-center justify-center rounded ">
<Video imageV='https://img.freepik.com/free-psd/school-admission-social-media-post-web-banner-template_237398-401.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
            
         </div>
         <div className="items-center justify-center rounded ">
         <Video imageV='https://img.freepik.com/free-psd/digital-marketing-live-webinar-corporate-social-media-post-template_202595-419.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
            
         </div>
         <div className="items-center justify-center rounded">
          <Video imageV='https://img.freepik.com/free-psd/digital-marketing-live-webinar-corporate-social-media-post-template_202595-423.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>

            
         </div>
         <div className="items-center justify-center rounded">
          <Video imageV='https://img.freepik.com/free-vector/happy-new-year-2024-background-with-elegant-luxury-golden-numbers_1361-4274.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879'/>     
         </div>
         <div className="items-center justify-center rounded">
          <Video imageV='https://img.freepik.com/premium-photo/little-happy-boy-near-christmas-tree_88340-5698.jpg?size=626&ext=jpg'/>          
         </div>
         <div className="items-center justify-center rounded">
          <Video imageV='https://img.freepik.com/free-psd/fashion-square-flyer-style_23-2148509057.jpg?w=740&t=st=1703609253~exp=1703609853~hmac=fbdce83cc8edb2564fc15bc7351a02757182176daf50c90ecac3b6fe0b8e5dd3'/>         
         </div>
      </div>
      </div>

</div>
</div></div>
        )
}