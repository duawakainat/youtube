import Image from "next/image";
import "../app/globals.css";
import { usePathname } from "next/navigation";
// import ReactPlayer from 'react-player'
export default function Video2(props) {
  const usePath = usePathname();
  return (
    <div>
      {usePath !== "/like" ? (
        <div className="relative" style={{ marginLeft: "16px" }}>
          <video
            className="lg:h-[353px] md:h-[288px] sm:h-[288px] max-[640px]:h-[288px] object-cover lg:rounded-2xl sm:rounded-md VideoL"
            poster={props.imageS}
          >
            <source
              src="https://www.youtube.com/watch?v=SfXaR_AQ0XU"
              className="w-100 h-[353px] rounded-md"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-row lg:relative md:absolute sm:absolute max-[640px]:absolute lg:bottom-0 sm:bottom-2 max-[640px]:bottom-2 max-[640px]:left-2 sm:left-2 sm:right-1 max-[640px]:right-1">
            <div className="space-y-0.5 text-left rtl:text-right mr-6">
              <h3 className="leading-4 lg:text-[16px] md:text-sm sm:text-sm max-[640px]:text-sm mt-3 lg:text-[#0f0f0f] sm:text-[#ffffff] max-[640px]:text-[#ffffff] font-medium">
                Best Joseph McFall
              </h3>
              <div className="text-xs lg:text-[rgb(96,96,96)] sm:text-[#ffffff] max-[640px]:text-[#ffffff] font-normal">
                6.6 Views
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative lg:h-[78dvh] lg:ml-4 sm:ml-[4px] sm:mb-[4px] max-[630px]:mb-[4px] max-[630px]:ml-[4px]">
          <video
            className="lg:h-[68dvh] md:h-[288px] sm:h-[288px] max-[640px]:h-[200px] object-cover lg:rounded-2xl sm:rounded-md VideoL"
            poster={props.imageS}
          >
            <source
              src="https://www.youtube.com/watch?v=SfXaR_AQ0XU"
              className="w-100 h-[353px] rounded-md"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-row lg:relative md:absolute sm:absolute max-[640px]:absolute lg:bottom-0 sm:bottom-2 max-[640px]:bottom-2 max-[640px]:left-2 sm:left-2 sm:right-1 max-[640px]:right-1">
            <div className="space-y-0.5 text-left rtl:text-right mr-6">
              <h3 className="leading-4 lg:text-[16px] md:text-sm sm:text-sm max-[640px]:text-sm mt-3 lg:text-[#0f0f0f] sm:text-[#ffffff] max-[640px]:text-[#ffffff] font-medium">
                Best Joseph McFall
              </h3>
              <div className="text-xs lg:text-[rgb(96,96,96)] sm:text-[#ffffff] max-[640px]:text-[#ffffff] font-normal">
                6.6 Views
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
