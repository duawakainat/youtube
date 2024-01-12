'use client'
import Tag from "./Tag";
import Image from 'next/image'
import '../app/globals.css'
import data from './button.json'
import { useState, useRef } from "react";
import gsap from "gsap";
export default function Video(props) {
    let scrl = useRef(null)
    const [scrollX, setscrollX]= useState(0);
    const [scrolEnd, setscrollEnd]=useState(false);
    //Slide click
    const slide = (shift)=>{
        scrl.current.scrollLeft+= shift;
        setscrollX(scrollX + shift)
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft)<=
        scrl.current.offsetWidth
            ) {
            setscrollEnd(true)
        }
        else {
            setscrollEnd(false)
        }
    }
        //Anim
       const anim =(e)=> {
gsap.from(e.target, {scale : 1});
gsap.to(e.target, {scale : 1.5});
       };
       const anim2 =(e)=> {
        gsap.from(e.target, {scale : 1.5});
        gsap.to(e.target, {scale : 1});
               };
       const scrollCheck=()=>{
        setscrollX(scrl.current.scrollLeft)
        if (Math.floor(scrl.current.scrollWidth-scrl.current.scrollLeft)<=
        scrl.current.offsetWidth) {
            setscrollEnd(true);
        }
        else {
            setscrollEnd(false)
        }
       }
  return (
    <div className="App sticky right-0 left-0 bg-white top-0 z-[999]">
    <button className="w-12 h-8 !bg-gray-100 flex justify-center items-center lg:hidden rounded-sm ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 28 28" {...props}><path fill="#000" d="M3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14S19.799 24.5 14 24.5S3.5 19.799 3.5 14M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2M8.083 9.698c-.388-1.01.604-2.003 1.615-1.615l4.995 1.92a5.75 5.75 0 0 1 3.305 3.304l1.919 4.995c.388 1.01-.605 2.003-1.615 1.615l-4.995-1.92a5.75 5.75 0 0 1-3.305-3.304zm1.602-.013l1.717 4.47a4.25 4.25 0 0 0 2.443 2.443l4.47 1.717l-1.717-4.47a4.25 4.25 0 0 0-2.443-2.443z"></path></svg>
  </button>
        {scrollX !== 0 && (
            <button className="prev pl-4" 
            onClick={()=>slide(-50)}
            // onMouseEnter={(e)=> anim(e)}
            // onMouseLeave={(e)=> anim2(e)}
            >
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 21.308L.692 12L10 2.692l1.063 1.064L2.82 12l8.244 8.244L10 21.308Z"></path></svg>
  
            </button>
        )}
    <ul className="ul px-6" ref={scrl} onScroll={scrollCheck}>
        {data.button.map((d,i)=>(
            <Tag data={d} key={i}/>
        ))}
    </ul>
    {!scrolEnd !== 0 && (
            <button className="prev pr-4" 
            onClick={()=>slide(+50)}
           
            
            >
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.313 12l-9.307 9.308Z"></path></svg>
 
            </button>
        )}
    </div>
  )}