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
        <div className='grid grid-cols-4 max-[640px]:grid-cols-4 flex items-center border-1 lg:hidden border-t-gray-100 fixed z-50 bottom-0 right-0 left-0 text-center bg-white leading-12'>
      {menuItem.map(({icon:Icon, ...menu})=>{
        const classes= getNavItemClasess(menu);
return <div key={menu.id} className={classes}>
  {/* <Link href={menu.link}> */}
    <div className='flex items-center my-1 justify-center w-full'>
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
<div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 min-[864px]:grid-cols-3 max-[864px]:grid-cols-2 min-[578px]:grid-cols-2 max-[578px]:grid-cols-1 mx-4 my-6 gap-4 mb-4">
       
       <div className='w-100'>  <div className="items-center w-100 justify-center rounded ">
         <Video imageV='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyD446vRksw83BsovYbnyQGgYdWro8cLX8Q&usqp=CAU'/>
         </div>
         </div>
         <div className='w-100'>
         <div className="items-center justify-center rounded ">
         <Video imageV='data:image/jpeg;base64,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'/>         
         </div></div>
         <div className='w-100'>
         <div className="items-center justify-center rounded ">
          <Video imageV='data:image/jpeg;base64,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'/>
         </div></div>
      {/* </div>

      <div className="grid lg:grid-cols-3 mx-4 my-6 md:grid-cols-2 sm:grid-cols-2 max-[600px]:grid-cols-2 gap-4 mb-4"> */}
         <div className="items-center justify-center rounded ">
<Video imageV='data:image/jpeg;base64,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'/>
            
         </div>
         <div className="items-center justify-center rounded ">
         <Video imageV='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.dawn.com%2F_img%2Fsocial-default.jpg&tbnid=qcDLoxDkJ45UCM&vet=10CLMBEDMotgFqFwoTCPDR0LCGj4MDFQAAAAAdAAAAABAC..i&imgrefurl=https%3A%2F%2Fimages.dawn.com%2F&docid=sDL2HKRGyyIoSM&w=376&h=376&q=images&ved=0CLMBEDMotgFqFwoTCPDR0LCGj4MDFQAAAAAdAAAAABAC'/>
            
         </div>
         <div className="items-center justify-center rounded "><Video imageV='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU'/>

            
         
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


      <div className="grid lg:grid-cols-3 md:grid-cols-3 min-[864px]:grid-cols-3 max-[864px]:grid-cols-2 min-[578px]:grid-cols-2 max-[578px]:grid-cols-1 mx-4 my-6 gap-4 mb-4">
         <div className="items-center justify-center rounded bg-gray-50 ">
<Video imageV='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE7j-fDPyljRDy9QSnxvzUZOrHxlmcNY3xQ&usqp=CAU'/>
            
         </div>
         <div className="items-center justify-center rounded bg-gray-50 ">
         <Video imageV='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnp7qRCcV5QnGVQT4vSNKg3-r_MCBDUHusNQ&usqp=CAU'/>
            
         </div>
         <div className="items-center justify-center rounded bg-gray-50 "><Video
         imageV='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnp7qRCcV5QnGVQT4vSNKg3-r_MCBDUHusNQ&usqp=CAU'/>

            
         </div>
      {/* </div>

      <div className="grid lg:grid-cols-3 mx-4 my-6 md:grid-cols-2 sm:grid-cols-2 max-[600px]:grid-cols-2 gap-4 mb-4"> */}
         <div className="items-center justify-center rounded bg-gray-50 ">
<Video imageV='https://www.google.com/imgres?imgurl=https%3A%2F%2Fvinusimages.co%2Fwp-content%2Fuploads%2F2018%2F10%2FEG7A2390.jpgA_.jpg&tbnid=MMg1IYvp7cpiyM&vet=10CNQBEDMoxgFqFwoTCPDR0LCGj4MDFQAAAAAdAAAAABAC..i&imgrefurl=https%3A%2F%2Fvinusimages.co%2Fportfolio%2Fkids%2F&docid=UBGcDBjU3xAK2M&w=1920&h=1363&q=images&ved=0CNQBEDMoxgFqFwoTCPDR0LCGj4MDFQAAAAAdAAAAABAC'/>
            
         </div>
         <div className="items-center justify-center rounded bg-gray-50 ">
         <Video imageV='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_f-3Npwnj40B6u8O8WmcX8swxRqUS8ncQg&usqp=CAU'/>
            
         </div>
         <div className="items-center justify-center rounded bg-gray-50">
          <Video imageV='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE7j-fDPyljRDy9QSnxvzUZOrHxlmcNY3xQ&usqp=CAU'/>

            
         </div>
      </div>
      </div>

</div>
</div></div>
        )
}