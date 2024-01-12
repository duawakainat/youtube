import React from 'react'
import Slide from './slide';
import VideoC1 from './videoC1';
import Video2C from './video2C';
import Slide_1 from './Navbar'
const home1 = () => {
  return (
    <div className='lg:pb-0 sm:pb-[40px] max-[630px]:pb-[40px]'>
        <div className='grid grid-cols-1 sticky right-0 left-0 bg-white top-0 z-50 '>
        <Slide_1/>
        </div>
        <VideoC1/><div className="grid grid-cols-1 pr-4">
        <Slide/></div>
<Video2C/>
    </div>
  )
}

export default home1