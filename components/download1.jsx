import React from 'react'
import Video4 from './video4'
const Download1 = (props) => {
  return (
    <div> <div className='lg:flex sm:hidden max-[630px]:hidden justify-between items-center mt-6 px-4'>
    <div className='text-[20px] flex font-[700]'>
        
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-4' viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19.92 12.08L12 20l-7.92-7.92l1.42-1.41l5.5 5.5V2h2v14.17l5.5-5.51zM12 20H2v2h20v-2z"></path></svg>
     <h2>Download</h2></div>
    <div className=''><p className='text-sm text-[#065fd4] px-4 font-[500]'>Download settings</p>
    </div>
</div>
<div className="w-[210px] !h-[118px] relative group/item mt-6" style={{marginLeft: '16px'}}>
<Video4 image4='https://img.freepik.com/premium-photo/3d-stylized-illustration-3d-render-high-resolution_617193-372.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879' head1="Watch Later"/>
<div className="group/edit invisible  group-hover/item:visible  flex justify-center items-center group-hover/item:bg-black group-hover/item:opacity-70 absolute top-0 left-0 right-0 bottom-0">
{/* <div className=" bg-black opacity-70 rounded-lg ">   */}
  
    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }} viewBox="0 0 32 32" {...props}><path fill="#fff" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28" style={{ width: "24px", height: "24px" }}></path></svg>
 <p className="text-white text-[14px] font-[500] group-hover/edit:translate-x-0.5 ">Play All</p>
</div>
{/* </div> */}
<div className="absolute bottom-0 p-1 right-2 flex bg-black opacity-80 rounded-[5px]">
  
    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "16px", height: "16px" }} viewBox="0 0 16 16" {...props}><path fill="#fff" fillRule="evenodd" d="M1.75 3.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 0 0 0 1.5h4.25a.75.75 0 0 0 0-1.5zm11 3.116a1 1 0 0 0 0-1.732l-3-1.732a1 1 0 0 0-1.5.866v3.464a1 1 0 0 0 1.5.866z" clipRule="evenodd" style={{ width: "43px", height: "24px" }}></path></svg>
 
<p className="text-white text-[12.5px] font-[500]">3 video</p>
</div>
<div className="text-[12px] lg:text-[rgb(96,96,96)] mt-1 sm:text-[#000] max-[640px]:text-[#000] font-normal">kainat hafeez</div>
 <div className='flex'>
 <p className='text-xs px-1 py-[3px] mt-1 text-[#606060] bg-gray-200'>Downloaded</p></div>
 <p className="text-[12.5px] font-[500] text-[#606060] mt-1">          
 View full playlist
            </p>
</div>
 </div>
  )
}

export default Download1