import Image from "next/image";
import "../app/globals.css";
// import ReactPlayer from 'react-player'
export default function Video4(props) {
  return (
    <div className="relative">
      <video
        className="object-cover lg:rounded-md sm:rounded-md VideoL"
        poster={props.image4}
      >
        <source
          src="https://www.youtube.com/watch?v=SfXaR_AQ0XU"
          className="w-100 h-[353px] rounded-md"
          type="video/mp4"
        />
      </video>
      <div className="lg:relative md:absolute sm:absolute max-[640px]:absolute lg:bottom-0 sm:bottom-2 max-[640px]:bottom-2 max-[640px]:left-2 sm:left-2 sm:right-1 max-[640px]:right-1">
        <div className="space-y-0.5 text-left rtl:text-right">
          <div className="flex justify-between group/item">
            <div>
              {" "}
              <h3 className="leading-4 lg:text-[14px] md:text-sm sm:text-sm max-[640px]:text-sm pt-2 pr-6 lg:text-[#0f0f0f] sm:text-[#ffffff] max-[640px]:text-[#ffffff] font-[500]">
                {props.head1}
              </h3>
            </div>
            <div className="me-1.5 group/edit invisible hover:bg-slate-200 group-hover/item:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                {...props}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
                  style={{ width: "24px", height: "24px" }}
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-xs lg:text-[rgb(96,96,96)] sm:text-[#ffffff] max-[640px]:text-[#ffffff] font-normal">
            {props.head2}
          </div>
        </div>
      </div>
    </div>
  );
}
