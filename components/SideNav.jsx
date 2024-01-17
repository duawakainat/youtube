'use client'
import React from 'react'
import You from './icon/you'
import { MediaValues } from 'css-mediaquery'
import Music from './icon/music'
import Reward from './icon/reward'
import Game from './icon/game'
import Square from './icon/square'
import CircleY from './icon/circleY'
 import KidY from './icon/kidY'
 import Channel from "./icon/channel";
import History from "./icon/history";
import Video3 from './icon/video3'
import Watch from "./icon/watch";
import HayI from '@/public/peakpx.jpg'
import Home from "./icon/home";
import Short from "./icon/short";
import Subcription from "./icon/subcription";
import Subcrip2 from './icon/subcrip2'
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import Image from 'next/image'
import page from '@/app/short/page'
import Down_arrow from './icon/down_arrow'
import Arrow_D from './icon/arrow_D'
import HandL from './icon/handL'
import Play from './icon/play'
import { useState, useRef, useMemo,useEffect } from "react";
const menuItem5 = [
    { id: 1, Label: "Youtube Premium", icon: Square, link: "./icon/squaree" },
    { id: 2, Label: "Youtube Kids", icon: CircleY, link: "/icon/circleY" },
    { id: 3, Label: "Youtube Music", icon: KidY, link: "/icon/kidY" },
  ];
  const menuItem = [
     { id: 1, Label: "Home", icon: Home, link: "/" },
     { id: 2, Label: "Short", icon: Short, link: "/short" },
     { id: 3, Label: "Subcription", icon: Subcription, link: "/subcription3v" },
   ];
   const menuItem7 = [
    { id: 1, Label: "Home", icon: Home, link: "/" },
    { id: 2, Label: "Short", icon: Short, link: "/short" },
    { id: 3, Label: "Subcription", icon: Subcrip2, link: "/subcription3v" },
  ];
   const menuItem2 = [
     { id: 1, Label: "Your Channel", icon: Channel, link: "/subcription" },
     { id: 2, Label: "History", icon: History, link: "/history" },
     { id: 3, Label: "Your Video", icon: Video3, link: "/icon/video3" },
     { id: 4, Label: "Watch Later", icon: Watch, link: "/watch" },
     { id: 5, Label: "Download", icon: Down_arrow, link: "/download" },
   ];
   const menuItem3 = [
     { id: 1, Label: "Kainat Hafeez", image:HayI , link: "../public/peakpx.jpg" },
     { id: 2, Label: "Duawa Kainat", image: HayI , link: "../public/peakpx.jpg" },
     { id: 3, Label: "Yaaho Video", image: HayI , link: "../public/peakpx.jpg" },
     { id: 4, Label: "Develop Later", image: HayI , link: "../public/peakpx.jpg" },
   ];
   const menuItem4 = [
    { id: 1, Label: "Music", icon: Music, link: "/icon/music" },
    { id: 2, Label: "SportS", icon: Reward, link: "/icon/reward" },
    { id: 3, Label: "Gaming", icon: Game, link: "/icon/game" },
  ];
  const menuItem6 = [
    { id: 1, Label: "Like videos", icon: HandL, link: "/like" },
    { id: 2, Label: "sub", icon: Play, link: "/sub" },
  ];
  const SideNav = ({settoogleCallapse,toogleCallapse}) => {
    const [isCallapse, setIsCallapse] = useState(false);
    const [buttonT, setbuttonT]=useState(false)
    const wrapperClesses = classNames(
        "h-screen  pt-4 flex flex-col lg:pb-16 flex-row items-center sticky right-0 left-0 bg-white top-0 z-50  lg:block hidden md:hidden sm:hidden max-[630px]:hidden",
        {  ["w-60 flex px-4 overflow-y-hidden hover:overflow-y-scroll"]: !toogleCallapse, ["w-20 flex flex-col justify-center px-0"]: toogleCallapse}
       );
       const router = useRouter();
       const activeMenu = useMemo(
         () => menuItem.find((menu) => menu.link === router.pathname),
         [router.pathname]
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
  return (
    <div>
        <div className={wrapperClesses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>        
        <div className="flex flex-col items-start">
          {menuItem.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasess(menu);
            return <div key={menu.id} className={classes} >
                <Link href={menu.link}>
                <div className="flex items-center justify-center w-full">
                        <div>
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
        <div className="flex flex-col items-start justify-center">
          {menuItem7.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasess(menu);
            return <div key={menu.id} className="flex justify-center items-center cursor-pointer hover:bg-gray-100 rounded-md w-full whitespace-nowrap">
                <Link href={menu.link}>
                <div className="flex items-center justify-center w-full">
                        
                          {toogleCallapse && (
                            <div className='flex items-center justify-center' style={{height: '74px'}}  >
                            <Link className='flex flex-col justify-center' href={menu.link}>
                              <Icon className='flex justify-center text-center mb-1.5' style={{width: "1.5rem",height: "1.5rem"}}></Icon>
                              <span className={classNames('text-[10px] font-medium text-text-light')}>
                              {menu.Label}</span></Link></div>
                          )}
                        <div>
                    </div></div>
                </Link>
                 
            </div>;
          })}
        </div>   
        <ul>   <li className='border-b-[1px] border-gray-300 my-3'></li>

          <li>

            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
               <span className="flex me-3 whitespace-nowrap">You</span>
               <svg className="w-3 h-3 text-[#0f0f0f]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
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
    
    {buttonT && (
   <div className="flex flex-col items-start">
          {menuItem6.map(({ icon: Icon, ...menu }) => {
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
        </div>  )}    
        <div className='flex items-center cursor-pointer hover:bg-gray-100 rounded-md w-full whitespace-nowrap'>
        <button className='flex hover:bg-gray-100' style={{height: '40px'}} onClick={()=>setbuttonT(!buttonT)}>
        <div className="flex items-center px-3 w-full h-full">
                    {!toogleCallapse && (
                           
                        <div className='flex items-center' style={{width: '48px'}}>
<Arrow_D/>
                        </div>
                        )}
                        {!toogleCallapse && (
                            <span className={classNames('text-sm font-medium text-text-light')}>
                                Show More
                            </span>
                        )}
                    </div>
          
          </button></div>
{!toogleCallapse && (
<ul>
<li className='border-b-[1px] border-gray-300 my-3'></li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg group">
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
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  group">
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
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg group">
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
  )
}

export default SideNav