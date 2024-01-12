'use client'
import Video2 from './Video2';
import React from 'react'
import Video4 from "@/components/video4";
import { useState } from 'react'
const likeP = (props) => {
    const [Active , setActive] = useState(1);
    const ToggleTab = (index)=>{
        setActive(index);
      };
      const getActiveClass=(index, className)=>{
       return Active === index ? className : '';
      }
      const [Video, SetVideo] = useState ([
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
    <div>
        <div className='grid lg:grid-cols-6 ralative lg:px-6 sm:p-0 max-[630px]:p-0'>
        <div className=' lg:col-span-2'>
          <div className='w-full lg:rounded-[24px] lg:mb-6 overflow-y-auto lg:h-[83dvh] bg_image bg-cover sticky lg:pb-16 bottom-6 top-6'>
          <div className='lg:block sm:flex max-[630px]:flex'>
            <div className=' p-6 grid lg:grid-cols-1 sm:grid-cols-2 max-[630px]:grid-cols-2 max-[450px]:grid-cols-1 max-[450px]:mx-0 sm:min-w-720 mx-auto'>
            <video className="lg:h-30 rounded-2xl object-cover max-[630px]:h-48 max-[450px]:hidden" poster="/hqdefault.jpg">
        <source src="https://www.youtube.com/watch?v=geDJIcOU7dg" className='w-100' type="video/mp4"/>
      </video>
      <div className='lg:pl-0 lg:pb-0 sm:pl-6 sm:pb-4 max-[630px]:pl-6 max-[630px]:pb-4 max-[450px]:pb-3 max-[450px]:pl-0 max-[450px]:pb-0'>
      <h2 className='text-[28px] font-[700] text-white'>Watch Later</h2>
{/* <Image src="/hqdefault.jpg" width={100} height={100} alt='hello'/> */}
<div className='mt-4 text-white'>
    <p className='mb-1 text-sm font-[500]'>kainat hafeez</p>
    <p className='mb-3 text-xs font-[400] line-clamp-1 '> 40 video<span className='mr-1'> No views</span> <span className='mr-1'>Update yesterday</span> </p>
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
 <buttton className="text-sm font-[500] flex text-white items-center justify-center h-9 bg-[rgba(255,255,255,0.1)] rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 ' viewBox="0 0 24 24" {...props}><path fill="#fff" d="M8 19V5l11 7z"></path></svg>
 Play All</buttton>
</div></div>
            </div></div>
        </div></div>
        <div className='lg:col-span-4 lg:pr-6 lg:pt-6 lg:pb-16 sm:pb-[115px] max-[630px]:pb-[115px]'>
      <div className={`content ${getActiveClass(1, "active-content")}`}>
      <div className="lg:flex sm:hidden ms-9 max-[630px]:hidden justify-between items-center py-2 pr-4 ps-6 bg-gray-100">
 <p className="text-[12px] font-[500] flex items-center h-10">2 unavailable videos are hidden</p>
 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 15 15" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793L2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5z" clipRule="evenodd"></path></svg>
   </div></div>
      <div className="">
      <div className="flex items-center lg:ml-[36px] sm:ml-[12px] max-[630px]:ml-3">
        <button className={`text-[16px] font-[500] bg-gray-100 px-3 my-3 mr-3 h-8 rounded-lg flex justify-center items-center tab_btn ${getActiveClass(1, "active-Like")}`} onClick={()=> ToggleTab(1)}> All</button>
        <button className={`text-[16px] font-[500] bg-gray-100 px-3 my-3 mr-3 h-8 rounded-lg flex justify-center items-center tab_btn ${getActiveClass(2,  "active-Like")}`} onClick={()=> ToggleTab(2)}> Videos</button>
        <button className={`text-[16px] font-[500] bg-gray-100 px-3 my-3 mr-3 h-8 rounded-lg flex justify-center items-center tab_btn ${getActiveClass(3, "active-Like")}`} onClick={()=> ToggleTab(3)}> Short</button>
<button className='text-[16px] font-[500] mr-6 leading-[48px] tab_btn'> 

    <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2M3.5 10.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 0 0-13.5 0" style={{width: '20px', height: '20px'}}></path></svg>
  </button>
      </div></div>
      <div className="contant-box">
      <div className={`content ${getActiveClass(1, "active-content")}`}>
      
           {Video.map((menu,index) => {
            return <div key={index} className="my-2 lg:ms-0 lg:px-0 sm:px-3 max-[630px]:px-3 max-[630px]:ms-0">

                <div className="flex items-center lg:h-[90px] rounded-md">
          <div className='w-9 lg:flex sm:hidden max-[630px]:hidden'>
    <p className='text-[16px] font-[500] px-[12px]'>{menu.index}</p>
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
                <div className="flex justify-around">
                  <div>
                <h3 className="xl:text-[16px] line-clamp-2 sm:text-[14px] max-[600px]:text-[14px] mb-2` font-[400] mr-2">
                  {menu.title}</h3>
                <div className="flex justify-start">
                    <p className="text-xs font-[400] text-[#606060]">{menu.TV}</p>
                    <p className="text-xs font-[400] text-[#606060]">{menu.Kilo}</p>

                </div></div>
                <div className="flex">
    <div className="w-10 h-10 lg:invisible group-hover/item:visible md:visible max-[630px]:visible">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" {...props}><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0z" fill="currentColor"></path></g></svg>
 
    </div>
                </div>
                </div>
                </div>
              </div></div>
            
          })} </div>

<div className={`content ${getActiveClass(2, "active-content")}`}>
   
           {Video.map((menu,index) => {
            return <div key={menu.index} className="mt-3 lg:p-0 sm:px-3 max-[630px]:px-3 max-[630px]:ms-0">

                <div className="flex lg:h-[90px] rounded-md">
                <div className=' w-9 lg:flex sm:hidden max-[630px]:hidden'>
    <p className='text-[16px] font-[500] px-[12px]'>{menu.index}</p> </div>
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
                <div className="flex justify-around">
                  <div>
                <h3 className="xl:text-[16px] line-clamp-2 sm:text-[14px] max-[600px]:text-[14px] mb-2` font-[400] mr-2">
                  {menu.title}</h3>
                <div className="flex justify-start">
                    <p className="text-xs font-[400] text-[#606060]">{menu.TV}</p>
                    <p className="text-xs font-[400] text-[#606060]">{menu.Kilo}</p>

                </div></div>
                <div className="flex w-6 h-6">
          <div className=" lg:block sm:hidden max-[630px]:hidden">
    <p className='text-xs text-[#606060] bg-gray-200 m-1'>Downloaded</p>
    </div>
    <div className="w-10 h-10 lg:invisible group-hover/item:visible md:visible max-[630px]:visible">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" {...props}><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0z" fill="currentColor"></path></g></svg>
 
    </div>
                </div>
                </div>
                </div>
              </div></div>
            
          })} </div>
<div className={`content  ${getActiveClass(3, "active-content")}`}>
<div className='grid lg:grid-cols-3 md:grid-cols-5 sm:grid-cols-4 max-[630px]:grid-cols-3'>
              <Video2 imageS='https://img.freepik.com/premium-psd/banner-offer-gamer-3d-sale-products-brazil_475765-340.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
              <Video2 imageS='https://img.freepik.com/premium-psd/banner-offer-gamer-3d-sale-products-brazil_475765-340.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
              <Video2 imageS='https://img.freepik.com/premium-psd/banner-offer-gamer-3d-sale-products-brazil_475765-340.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
              <Video2 imageS='https://img.freepik.com/premium-psd/banner-offer-gamer-3d-sale-products-brazil_475765-340.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
              <Video2 imageS='https://img.freepik.com/premium-psd/banner-offer-gamer-3d-sale-products-brazil_475765-340.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
              <Video2 imageS='https://img.freepik.com/premium-psd/banner-offer-gamer-3d-sale-products-brazil_475765-340.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais'/>
              </div>
 </div>
 </div>
          </div>
        </div> 
    </div>
  )
}

export default likeP