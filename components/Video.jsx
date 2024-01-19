"use client";
import Image from "next/image";
import "../app/globals.css";
import imagess from "./imagess.json";
import { usePathname } from "next/navigation";
export default function Video(props) {
  const Pathname = usePathname();
  return (
    <div>
      {Pathname !== "/subcription3v" ? (
        <div className="lg:h-[333px]  sm:h-[288px] max-[630px]:h-[320px] min-[480px]:h-[320px] block items-start">
          <video
            className="VideoS lg:h-48 md:h-40 sm:h-48 rounded-2xl"
            poster={props.imageV}
          >
            <source
              src="https://www.youtube.com/watch?v=geDJIcOU7dg"
              className="w-100"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-row">
            <Image
              className="rounded-[50%] lg:min-w-[36px] lg:!max-h-[36px] mt-3 mr-3 md:w-10 sm:min-w-[40px] sm:max-h-[40px] max-[630px]:max-h-[40px] max-[630px]:min-w-[40px]"
              src="/sreejith-kalesh-qTmrnmiEwLQ-unsplash.jpg"
              width={36}
              height={36}
              alt="profile picture"
            />
            <div className="space-y-0.5 text-left rtl:text-right mr-6">
              <h3 className="leading-4 md:leading-[18px]  lg:text-[16px] md:text-sm sm:text-sm max-[640px]:text-sm mt-3 text-[#0f0f0f] font-medium">
                Mix Rahiya Sohniya Madinay Wal Ja Ke | Sahir Ali Bagga | Naat
              </h3>
              <div className="text-xs text-[#606060] min-[320px]:text-[#456] font-normal">
                CTO at Google
              </div>
              <div className="text-xs text-[#606060] font-normal">
                6.6 Views
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:block sm:flex items-start">
          <video
            className="lg:!min-h-[192px] lg:w-[100%] sm:!min-w-[200px] rounded-[12px] max-[630px]:w-[100%] sm:!max-h-[112px] max-[635px]:max-h-[250px] max-[455px]:max-h-[182px] object-cover"
            poster={props.imageV}
          >
            <source
              src="https://www.youtube.com/watch?v=geDJIcOU7dg"
              className="w-100"
              type="video/mp4"
            />
          </video>{" "}
          <div className="lg:space-y-0.5 lg:pl-0 sm:pl-3 text-left rtl:text-right mr-6">
            <div className="lg:block">
              <h3 className="leading-4 md:leading-[18px]  lg:text-[16px] md:text-sm sm:text-sm max-[640px]:text-sm lg:mt-3 text-[#0f0f0f] font-medium">
                Mix Rahiya Sohniya Madinay Wal Ja Ke | Sahir Ali Bagga | Naat
              </h3>
              <div className="text-xs text-[#606060] min-[320px]:text-[#456] font-normal">
                CTO at Google
              </div>
              <div className="text-xs text-[#606060] font-normal">
                6.6 Views
              </div>
              <Image
                className="rounded-[50%] lg:hidden sm:block max-[630px]:block lg:min-w-[36px] lg:!min-h-[36px] lg:mt-3 lg:mr-3 md:w-10 sm:w-10 h-10"
                src="/sreejith-kalesh-qTmrnmiEwLQ-unsplash.jpg"
                width={36}
                height={36}
                alt="profile picture"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
