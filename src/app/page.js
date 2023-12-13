'use client'
import './globals.css'
import data from '../../components/button.json'
import Tag from '../../components/Tag'
import { useState, useRef } from 'react'

export default function App() {
   
   let scrl = useRef(null);
   const [scrollX, setscrollX]= useState(0)
const [scrollEnd , setscrollEnd]= useState(0)

const slide= (shift)=>{
scrl.current.scrollLeft+= shift;
setscrollX(scrollX + shift);
if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft)<=
scrl.current.offsetWidth) {
   setscrollEnd(true)
}
else {
   setscrollEnd(true)
}
};
  
const scrollCheck=()=>{
   setscrollX(scrl.current.scrollLeft);
   if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
}
   
   return(
      <div>
{
   scrollX!==0 && (
      <button className='prev'
      onClick={()=>slide(-50)}>pre</button>
   )
}
<ul ref={scrl} onScroll={scrollCheck}>
   {
      data.button.map((d,i)=>(
         <Tag data={d} key={i}/>
      ))
   }</ul>
   {
      !scrollEnd && (
         <button className='next'
         onClick={()=>slide(+50)}>next</button>
      )
   }
   </div>
)}

