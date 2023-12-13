import Tag from "./Tag";
import Image from 'next/image'
import '../app/globals.css'
import data from './Button.json'
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
    <div className="App">
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