
import Image from 'next/image'
import '../app/globals.css'
import imagess from './imagess.json'
export default function Video(props) {
  return (
    <div className='lg:h-[333px]  sm:h-[288px] max-[630px]:h-[288px] block items-start'>
  
<video className="VideoS lg:h-48 md:h-40 sm:h-48 rounded-2xl" poster={props.imageV}>
  <source src="https://www.youtube.com/watch?v=geDJIcOU7dg" className='w-100' type="video/mp4"/>
</video>
  <div className="flex flex-row">
            <Image className="rounded-[50%] lg:min-w-[36px] lg:!min-h-[36px] mt-3 mr-3 md:w-10 sm:w-10 h-10" src="/sreejith-kalesh-qTmrnmiEwLQ-unsplash.jpg" width={36} height={36}  alt="profile picture"/>
            <div className="space-y-0.5  dark:text-white text-left rtl:text-right mr-6">
                <h3 className='leading-4 md:leading-[18px]  lg:text-[16px] md:text-sm sm:text-sm max-[640px]:text-sm mt-3 text-[#0f0f0f] font-medium'>Mix Rahiya Sohniya Madinay Wal Ja Ke | Sahir Ali Bagga | Naat</h3>
                <div className="text-xs text-[#606060] min-[320px]:text-[#456] font-normal">CTO at Google</div>
                <div className="text-xs text-[#606060] font-normal">6.6 Views</div>
            </div>
        </div> 
    </div>
    )}