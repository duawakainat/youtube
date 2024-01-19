"use client";
import React from "react";
import VideoC1 from "@/components/VideoC1";
import Slide from "@/components/Slide";
import ImageSub from "@/components/ImageSub";

const Dicsription = (props) => {
  return (
    <div>
      <ImageSub />
      <div className="lg:flex sm:hidden max-[630px]:hidden justify-between items-center mt-6 px-4">
        <div className="text-[20px] font-[700]">
          <h2>Latest</h2>
        </div>
        <div className="flex">
          <p className="text-sm text-[#065fd4] px-4 font-[500]">Manage</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=""
            style={{ width: "24px", height: "24px" }}
            viewBox="0 0 1024 1024"
            {...props}
          >
            <path
              fill="#000"
              d="M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16"
              className=""
              style={{ width: "24px", height: "24px" }}
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="px-3"
            style={{ width: "40px", height: "24px" }}
            viewBox="0 0 20 20"
            {...props}
          >
            <path
              fill="currentColor"
              d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1A1.5 1.5 0 0 1 6 3.5v1A1.5 1.5 0 0 1 4.5 6h-1A1.5 1.5 0 0 1 2 4.5zM3.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM2 9.5A1.5 1.5 0 0 1 3.5 8h1A1.5 1.5 0 0 1 6 9.5v1A1.5 1.5 0 0 1 4.5 12h-1A1.5 1.5 0 0 1 2 10.5zM3.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM2 15.5A1.5 1.5 0 0 1 3.5 14h1A1.5 1.5 0 0 1 6 15.5v1A1.5 1.5 0 0 1 4.5 18h-1A1.5 1.5 0 0 1 2 16.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM8 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:pb-[90px] sm:pb-[115px] max-[630px]:pb-[115px]">
        <VideoC1 />
        <Slide />
        <VideoC1 />
      </div>
    </div>
  );
};

export default Dicsription;
