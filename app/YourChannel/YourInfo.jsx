"use client";
import React, { useState } from "react";
import Image from "next/image";
import Video4 from "../../component/Video4";

const YourInfo = (props) => {
  const [Active, setActive] = useState(3);
  const ToggleTab = (index) => {
    setActive(index);
  };
  const getActiveClass = (index, className) => {
    return Active === index ? className : "";
  };
  return (
    <div>
      {" "}
      <div className="flex justify-start sm:items-center max-[630px]:items-start px-[20px] pt-4 pb-1 ">
        <div className="mr-[24px]">
          <Image
            className="md:min-w-[160px] sm:max-w-[120px] lg:min-h-[160px] max-[630px]:min-h-[72px] max-[630px]:max-w-[72px] rounded-full"
            src="/unnamed.jpg"
            alt="subcription"
            width={160}
            height={160}
          />
        </div>
        <div>
          <h1 className="text-3xl font-[700] mb-1">Kainat Hafeez</h1>
          <p className="text-[14px] text-[#606060] font-[400] text-center flex items-center">
            @kainathafeez123<span className="mx-1 flex items-center">.</span> 1
            video
          </p>
          <div>
            <p className="text-[14px] py-2.5 text-[#606060] font-[400] text-center flex items-center">
              More about this channel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="min-w-6 min-h-6"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                {...props}
              >
                <path
                  fill="currentColor"
                  d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
                  className="min-w-6 min-h-6"
                  style={{ width: "24px", height: "24px" }}
                ></path>
              </svg>
            </p>
          </div>
          <div className="lg:flex lg:visible sm:hidden max-[630px]:hidden">
            <button className="bg-gray-100 text-[14px] font-[500] rounded-[18px] leading-[36px] px-4 me-2">
              Customise channel
            </button>
            <button className="bg-gray-100 text-[14px] font-[500] rounded-[18px] leading-[36px] px-4 ">
              Manage videos
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-200">
        <div className="flex items-center ml-[20px]">
          <button
            className={`text-[16px] font-[500] mr-6 leading-[48px] tab_btn ${getActiveClass(
              1,
              "active-tabs"
            )}`}
            onClick={() => ToggleTab(1)}
          >
            {" "}
            Home
          </button>
          <button
            className={`text-[16px] font-[500] mr-6 leading-[48px] tab_btn ${getActiveClass(
              2,
              "active-tabs"
            )}`}
            onClick={() => ToggleTab(2)}
          >
            {" "}
            Short
          </button>
          <button
            className={`text-[16px] font-[500] mr-6 leading-[48px] tab_btn ${getActiveClass(
              3,
              "active-tabs"
            )}`}
            onClick={() => ToggleTab(3)}
          >
            {" "}
            Playlist
          </button>
          <button className="text-[16px] font-[500] mr-6 leading-[48px] tab_btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "20px", height: "20px" }}
              viewBox="0 0 24 24"
              {...props}
            >
              <path
                fill="currentColor"
                d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2M3.5 10.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 0 0-13.5 0"
                style={{ width: "20px", height: "20px" }}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="contant-box lg:pb-16 sm:pb-[64px] max-[630px]:pb-[115px]">
        <div
          className={`content lg:pl-4 sm:pl-3 max-[630px]:ml-3 lg:mt-6 sm:mt-3 max-[630px]:mt-3 ${getActiveClass(
            1,
            "active-content"
          )}`}
        >
          <div className="flex w-[24px] ml-8 lg:mb-6 sm:mb-3 max-[630px]:mb-3  justify-center items-center ">
            <div className="w-9 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                {...props}
              >
                <path
                  fill="red"
                  d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.504 4.504 0 0 0-2.402 4.193a4.521 4.521 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.528 4.528 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.494 4.494 0 0 0 2.39-4.192a4.525 4.525 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z"
                ></path>
              </svg>
            </div>
            <p className="lg:text-[20px] sm:text-[18px] max-[630px]:text-[18px] font-bold">
              {" "}
              Shorts{" "}
            </p>
          </div>
          <div className="lg:w-[210px] sm:w-[148px] lg:h-[351px] sm:h-[248px] max-[630px]:h-[248px] max-[630px]:w-[148px]">
            <Video4
              image4="https://img.freepik.com/free-photo/portrait-handsome-attractive-singer_1150-16926.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais"
              className=""
              head1="February 4, 2023"
              head2="1 Views"
            />
          </div>{" "}
        </div>

        <div
          className={`content lg:pl-4 sm:pl-3 max-[630px]:ml-3 lg:mt-6 sm:mt-3 max-[630px]:mt-3 ${getActiveClass(
            2,
            "active-content"
          )}`}
        >
          <div className="w-[210px] !h-[351px] max-[630px]:h-[248px] max-[630px]:w-[148px]">
            <Video4
              image4="https://img.freepik.com/free-photo/medium-shot-man-recording-himself_23-2150336096.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais"
              head1="February 4, 2023"
              head2="1 Views"
            />
          </div>{" "}
        </div>
        <div
          className={`content lg:pb-16 sm:pb-[84px] max-[630px]:pb-[125px]  ${getActiveClass(
            3,
            "active-content"
          )}`}
        >
          <div className="flex justify-between h-[56px] mx-4 my-2 items-center">
            <div>
              <p className="text-[16px] font-[500]">Created playlists</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="me-1"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                {...props}
              >
                <path
                  fill="currentColor"
                  d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"
                  style={{ width: "24px", height: "24px" }}
                ></path>
              </svg>
              <p className="text-[16px] font-[500]">Sort by</p>
            </div>
          </div>
          <div
            className="w-[210px] !h-[118px] relative group/item"
            style={{ marginLeft: "16px" }}
          >
            <Video4 image4="https://img.freepik.com/premium-photo/3d-stylized-illustration-3d-render-high-resolution_617193-372.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879" />
            <div className="group/edit invisible  group-hover/item:visible  flex justify-center items-center group-hover/item:bg-black group-hover/item:opacity-70 absolute top-0 left-0 right-0 bottom-0">
              {/* <div className=" bg-black opacity-70 rounded-lg ">   */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 32 32"
                {...props}
              >
                <path
                  fill="#fff"
                  d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28"
                  style={{ width: "24px", height: "24px" }}
                ></path>
              </svg>
              <p className="text-white text-[14px] font-[500] group-hover/edit:translate-x-0.5 ">
                Play All
              </p>
            </div>
            {/* </div> */}
            <div className="absolute bottom-0 p-1 right-2 flex bg-black opacity-80 rounded-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "16px", height: "16px" }}
                viewBox="0 0 16 16"
                {...props}
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M1.75 3.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 0 0 0 1.5h4.25a.75.75 0 0 0 0-1.5zm11 3.116a1 1 0 0 0 0-1.732l-3-1.732a1 1 0 0 0-1.5.866v3.464a1 1 0 0 0 1.5.866z"
                  clipRule="evenodd"
                  style={{ width: "43px", height: "24px" }}
                ></path>
              </svg>

              <p className="text-white text-[12.5px] font-[500]">3 video</p>
            </div>
            <div className="text-[16px] lg:text-[rgb(96,96,96)] sm:text-[#000] max-[640px]:text-[#000] font-normal">
              Sub
            </div>
            <div className="flex">
              <div className="bg-gray-100 py-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-4 min-h-4"
                  style={{ width: "16px", height: "16px" }}
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="#606060"
                    d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15q0-.825-.587-1.412T12 13q-.825 0-1.412.588T10 15q0 .825.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zM6 20V10z"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-[500] bg-gray-100 text-[#606060] py-[3px] pr-1">
                Private
              </p>
            </div>
            <p className="text-[12.5px] font-[500] text-[#606060] mt-1">
              View full playlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourInfo;
