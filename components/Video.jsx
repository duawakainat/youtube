
import Image from 'next/image'
import '../app/globals.css'
export default function Video() {
  return (
    <div>
<video className="VideoS lg:h-48 md:h-40 sm:h-48   rounded-2xl" poster='/sreejith-kalesh-qTmrnmiEwLQ-unsplash.jpg' autoPlay muted controls>
  <source src="https://www.youtube.com/watch?v=geDJIcOU7dg" className='w-100' type="video/mp4"/>
</video>
  <div className="flex flex-row">
            <Image className="rounded-full lg:w-9 lg:h-9 mt-3 mr-3 md:w-10 sm:w-10 md:h-10 sm:h-10 " width={36} height={36} src="/sreejith-kalesh-qTmrnmiEwLQ-unsplash.jpg" alt="profile picture"/>
            <div className="space-y-0.5  dark:text-white text-left rtl:text-right mr-6">
                <h3 className='leading-4 md:leading-[18px]  lg:text-lg md:text-sm sm:text-sm max-[640px]:text-sm mt-3 text-[#0f0f0f] font-medium'>Best Joseph McFall</h3>
                <div className="text-xs text-[#606060] min-[320px]:text-[#456] font-normal">CTO at Google</div>
                <div className="text-xs text-[#606060] font-normal">6.6 Views</div>
            </div>
        </div> 
    </div>
    )}