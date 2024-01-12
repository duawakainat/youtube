'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import ReactPlayer from 'react-player'
const Watch1V = (props) => {
  const [video, setVideo] = useState ([
    { index: "1",
    imageV:'https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais',
   
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais", title:"LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court", TV: 'Capital TV', Kilo: '19k views'
    },
    { index: "2",
    imageV:'https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais',
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais", title:"LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court", TV: 'Capital TV', Kilo: '19k views'
    },
    { index: "3",
    imageV:'https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais',
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais", title:"LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court", TV: 'Capital TV', Kilo: '19k views'
    }, 
    { index: "4",
    imageV: 'https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais',
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais", title:"LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court", TV: 'Capital TV', Kilo: '19k views'
    },
    { index: "5",
    imageV:'https://img.freepik.com/premium-vector/live-webinar-social-media-post_103645-611.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais',
      image:"https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais", title:"LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court", TV: 'Capital TV', Kilo: '19k views'
     
    },
    { index: "6",
    imageV:'https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais',
    
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais", title:"LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court", TV: 'Capital TV', Kilo: '19k views'
    },
  ])
  return (
    <div className=''>
        <div className='grid lg:grid-cols-6 ralative lg:px-6 sm:p-0 max-[630px]:p-0'>
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
        <div className=' lg:col-span-2'>
          <div className='lg:mb-4 w-full lg:rounded-[24px] lg:h-[83dvh] mb-6 overflow-y-auto bg_image bg-cover sticky bottom-6 top-6'>
          <div className='lg:block sm:flex max-[630px]:flex'>
            <div className=' p-6 grid lg:grid-cols-1 sm:grid-cols-2 max-[630px]:grid-cols-2 max-[450px]:grid-cols-1 max-[450px]:mx-0 sm:min-w-720 mx-auto'>
            <video className="lg:h-30 rounded-2xl object-cover max-[630px]:h-48 max-[450px]:hidden" poster="/hqdefault.jpg">
        <source src="https://www.youtube.com/watch?v=geDJIcOU7dg" className='w-100' type="video/mp4"/>
      </video>
      <div className='lg:pl-0 lg:pb-0 sm:pl-6 lg:mt-4 sm:pb-4 max-[630px]:pl-6 max-[630px]:pb-4 max-[450px]:pb-3 max-[450px]:pl-0 max-[450px]:pb-0'>
    <div className='flex justify-between items-center'>  <h2 className='text-[28px] font-[700] text-white'>Sub</h2>
      
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" {...props}><path fill="#fff" d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"></path></svg>
    </div>
{/* <Image src="/hqdefault.jpg" width={100} height={100} alt='hello'/> */}
<div className='mt-4 text-white'>
    <p className='mb-1 text-sm font-[500]'>kainat hafeez</p>
    <div className='flex items-center py-2'>  <p className='mb-1 text-sm font-[500]'>Private</p>      
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"></path></svg>
      </div>
    <p className='mb-3 text-xs font-[400] line-clamp-1 '> 3 video<span className='mr-1'> 3 video</span> <span className='mr-1'>Update today</span> </p>
</div>
<div className='flex'>
    <div className='flex items-center h-9 w-9 mr-2 justify-center rounded-full bg-[rgba(255,255,255,0.1)]'>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" {...props}><path fill="#fff" d="M19.92 12.08L12 20l-7.92-7.92l1.42-1.41l5.5 5.5V2h2v14.17l5.5-5.51zM12 20H2v2h20v-2z"></path></svg>
 </div>
 <div className='flex items-center h-9 w-9 justify-center rounded-full bg-[rgba(255,255,255,0.1)]'>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" {...props}><g fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0z" fill="currentColor"></path></g></svg>
  </div>
</div>
<div className='grid grid-cols-2 my-4'>
<buttton className="text-sm font-[500] flex items-center justify-center h-9 mr-2 bg-white rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 mr-1 ' viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8 19V5l11 7z"></path></svg>
 Play All</buttton>
 <buttton className="text-sm font-[500] text-white flex items-center justify-center h-9 bg-[rgba(255,255,255,0.1)] rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 ' viewBox="0 0 24 24" {...props}><path fill="#fff" d="M8 19V5l11 7z"></path></svg>
 Play All</buttton>
</div>
<div className='flex justify-between items-center text-white'>  <p className='mb-1 text-sm font-[500]'>No Discription</p>
      
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" {...props}><path fill="#fff" d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"></path></svg>
    </div>
</div>
            </div></div>
        </div></div>
        <div className='lg:col-span-4 lg:pr-6 pt-6 lg:pb-16 sm:pb-[115px] max-[630px]:pb-[115px]'>
        <div className="lg:flex sm:hidden ms-10 max-[630px]:hidden justify-between items-center py-2 pr-4 ps-6 bg-gray-100">
 <p className="text-[12px] font-[500] flex items-center h-10">2 unavailable videos are hidden</p>
 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 15 15" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793L2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5z" clipRule="evenodd"></path></svg>
   </div>
        <div className="lg:flex sm:hidden ms-10 max-[630px]:hidden justify-start my-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="me-1" style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z" style={{ width: "24px", height: "24px" }}></path></svg>
 <p className="text-[16px] font-[500]">Sort by</p>
  </div>
           {video.map((menu,index) => {
            return <div key={menu.index} className="mt-3 lg:ms-0 sm:ms-3 max-[630px]:ms-0">

                <div className="flex items-center lg:h-[90px] rounded-md">
          <div className='px-1.5 w-9 lg:flex sm:hidden max-[630px]:hidden'>
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 ' viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path></svg>
    </div>
                {/* <iframe
                  width="100%"
                  className=" sm:h-[90px] sm:w-[160px] max-[600px]:w-[160px] max-[600px]:h-[90px] mr-4 rounded-lg"
                  src="https://www.youtube.com/embed/HZSa6x_fZSs?si=i6jptLnzqGdPCOTl"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe> */}
                   <video className="!max-h-[90px] !min-w-[160px] max-[630px]:min-w-[160px] max-[630px]:max-h-[90px] mr-4 rounded-lg object-cover" poster={menu.imageV}>
        <source src="https://www.youtube.com/watch?v=geDJIcOU7dg" className='w-100' type="video/mp4"/>
      </video>
                <div className="group/item">
                <div className="flex items-center">
                  <div>
                <h3 className="xl:text-[16px] line-clamp-2 sm:text-[14px] max-[600px]:text-[14px] mb-2` font-[400] mr-2">
                  {menu.title}</h3>
                <div className="flex justify-start">
                    <p className="text-xs font-[400] text-[#606060]">{menu.TV}</p>
                    {/* <menu.Icon /> */}
                    <p className="text-xs font-[400] text-[#606060]">{menu.Kilo}</p>

                </div></div>
                <div className="flex">
          <div className=" lg:flex sm:hidden max-[630px]:hidden">
    <p className='text-xs text-[#606060] bg-gray-200 m-1'>Downloaded</p>
    </div>
    <div className="w-6 h-6 lg:invisible group-hover/item:visible md:visible max-[630px]:visible">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" {...props}><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0z" fill="currentColor"></path></g></svg>
 
    </div>
                </div>
                </div>
                {/* <p className="text-xs font-[400] lg:flex sm:hidden max-[600px]:hidden text-[#606060] my-2">{menu.short}</p> */}
                </div>
              </div></div>
            
          })}</div>
        </div>
        </div>
  )
}

export default Watch1V