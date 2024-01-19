"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/public/man-isolated-showing-emotions-end-gestures.jpg";
import image2 from "@/public/handsome-smiling-man-looking-with-disbelief.jpg";
import image3 from "@/public/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background.jpg";
import HayI from "@/public/peakpx.jpg";
import Hands from "@/components/icon/Hand";
import Dishand from "@/components/icon/Dishand";
import Message from "@/components/icon/Message";
import Dot from "@/components/icon/Dot";

import "@/app/globals.css";
const video = [
  {
    video1I:
      "https://www.youtube.com/embed/2fKRFjtMvqU?autoplay=1&si=7Kc2iVC27NhuSnOB",
    disccription:
      "Aspire College Boys #funny #duet #punjabimusic #comedy #punjabisongs #school #sidhumoosewalamoos",
    image: image1,
    email: "@zamzamelectronicstra dingllc",
    Hand: Hands,
    Dishand: "Dishand",
    Message: "Message",
    Dot: "Dot",
  },
  {
    video1I:
      "https://www.youtube.com/embed/TYbCxgm2gCI?autoplay=1&mute=1&si=VcQhkMxqN48XjZGk",
    disccription:
      "2Aspire College Boys #funny #duet #punjabimusic #comedy #punjabisongs #school #sidhumoosewalamoos",
    image: image2,
    email: "@kainathafeez04",
  },
  {
    video1I:
      "https://www.youtube.com/embed/glejzVr2oPQ?autoplay=1&mute=1&si=Ac8Uav6T7aqKWbXA",
    disccription:
      "3Aspire College Boys #funny #duet #punjabimusic #comedy #punjabisongs #school #sidhumoosewalamoos",
    image: image3,
    email: "@hussnainhafeez",
  },
  {
    video1I:
      "https://www.youtube.com/embed/md4Zh_jn9kY?autoplay=1&mute=1&si=SFH7Nfs3ixsu01Bt",
    disccription:
      "4Aspire College Boys #funny #duet #punjabimusic #comedy #punjabisongs #school #sidhumoosewalamoos",
    image: image1,
    email: "@arrojhafeez",
  },
  {
    video1I:
      "https://www.youtube.com/embed/vaQMd1euvbI?autoplay=1&mute=1&si=Mmq8ylQOOViy6-js",
    disccription:
      "5Aspire College Boys #funny #duet #punjabimusic #comedy #punjabisongs #school #sidhumoosewalamoos",
    image: image2,
    email: "@aimenhafeez",
  },
];
const ShortP = (props) => {
  const [AvtiveImage, setavtiveImage] = useState(0);
  // console.log(video[index]);

  const Next = () => {
    if (AvtiveImage !== video.length - 1) {
      setavtiveImage(AvtiveImage + 1);
      return;
    }
    console.log(AvtiveImage);
  };
  const Pre = () => {
    if (AvtiveImage !== 0) {
      setavtiveImage(AvtiveImage - 1);
      return;
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="relative">
        <div
          className="flex justify-center relative items-end lg:bg-white sm:bg-black max-[635px]:bg-black"
          style={{ width: "100%" }}
        >
          <div className="relative lg:h-[90dvh] sm:h-[90dvh] my-auto lg:w-[320px] sm:w-[100%] max-[630px]:h-[90dvh] max-[635px]:w-[100%]">
            <div className="flex justify-center relative">
              <iframe
                width=""
                height=""
                className="lg:!w-[320px] md:!w-[520px] sm:!w-[420px] sm:!w-100 lg:h-[90dvh] sm:h-[90dvh] max-[630px]:h-[90dvh] max-[630px]:!w-[100%]"
                src={video[AvtiveImage].video1I}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
              <div className="m-3 lg:hidden flex absolute top-0 left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className="absolute bottom-0 lg:right-0 md:left-0"
              style={{
                paddingTop: "72px",
                paddingRight: "16px",
                paddingBottom: "16px",
                paddingLeft: "16px",
              }}
            >
              <div className="flex justify-start p-0 m-0 items-center">
                <Image
                  src={video[AvtiveImage].image}
                  alt="man"
                  className="rounded-full me-1.5 min-w-[36px] min-h-[36px]"
                  width={36}
                  height={36}
                />
                <h3 className="text-sm font-[500] text-white">
                  {video[AvtiveImage].email}
                </h3>
                <button className="min-w-[77px] h-[32px] bg-white text-xs font-[400] leading-[32px] rounded-full">
                  Subcription
                </button>
              </div>
              <h3 className="text-white text-sm font-[400]">
                {video[AvtiveImage].disccription}
              </h3>
            </div>
          </div>
          <div className="flex flex-col lg:relative sm:absolute md:right-0 sm:right-0 max-[630px]:absolute max-[630px]:right-0  items-end px-3">
            <div className="lg:pt-4">
              <div className="!min-w-[48px] !min-h-[48px] flex items-center justify-center rounded-full lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-6 min-h-6 lg:text-black text-white"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="M21 8q.8 0 1.4.6T23 10v2q0 .175-.038.375t-.112.375l-3 7.05q-.225.5-.75.85T18 21h-8q-.825 0-1.412-.587T8 19V8.825q0-.4.163-.762t.437-.638l5.425-5.4q.375-.35.888-.425t.987.175q.475.25.688.7t.087.925L15.55 8zM4 21q-.825 0-1.412-.587T2 19v-9q0-.825.588-1.412T4 8q.825 0 1.413.588T6 10v9q0 .825-.587 1.413T4 24"
                    className="min-w-6 min-h-6"
                    style={{ width: "24px", height: "24px" }}
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-[500] text-center lg:text-[#0f0f0f] sm:text-white max-[630px]:text-white">
                4.2M
              </p>
            </div>
            <div className="lg:pt-4">
              <div className="!min-w-[48px] !min-h-[48px] flex items-center justify-center rounded-full lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-6 min-h-6 lg:text-black text-white"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-5.293 1.293l-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707"
                    className="min-w-6 min-h-6"
                    style={{ width: "24px", height: "24px" }}
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-[500] text-center lg:text-[#0f0f0f] sm:text-white max-[630px]:text-white">
                Dislike
              </p>
            </div>
            <div className="lg:pt-4">
              <div className="!min-w-[48px] !min-h-[48px] flex items-center justify-center rounded-full lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-6 min-h-6 lg:text-black text-white"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 15 15"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H9.768l-1.852 2.775a.5.5 0 0 1-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5zM11 5H4V4h7zm-1 3H5V7h5z"
                    clipRule="evenodd"
                    className="min-w-6 min-h-6"
                    style={{ width: "24px", height: "24px" }}
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-[500] text-center lg:text-[#0f0f0f] sm:text-white max-[630px]:text-white">
                2.2k
              </p>
            </div>
            <div className="lg:pt-4">
              <div className="!min-w-[48px] !min-h-[48px] flex items-center justify-center rounded-full lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-6 min-h-6 lg:text-black text-white "
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="M3 13.5C3 9.36 6.36 6 10.5 6H13V2l7 6l-7 6v-4h-2.5C8.57 10 7 11.57 7 13.5V21H3z"
                    className="min-w-6 min-h-6"
                    style={{ width: "24px", height: "24px" }}
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-[500] text-center lg:text-[#0f0f0f] sm:text-white max-[630px]:text-white">
                Share
              </p>
            </div>
            <div className="lg:pt-4">
              <div className="!min-w-[48px] !min-h-[48px] flex items-center justify-center rounded-full lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-6 min-h-6 lg:text-black text-white"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 256 256"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
                    className="min-w-6 min-h-6"
                    style={{ width: "24px", height: "24px" }}
                  ></path>
                </svg>
              </div>
            </div>
            <div className="lg:pt-4 lg:py-0 sm:py-2.5 lg:px-0 sm:px-2 lg:pb-0 sm:pb-5 max-[630px]:px-max-[630px]:pt-2.5  max-[630px]:pb-5">
              <div className="w-[40px] h-[40px] rounded-md lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <Image
                  src={video[AvtiveImage].image}
                  className="w-[40px] h-[40px] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 lg:visible md:invisible">
          <button className="left b" onClick={Next}>
            <div className="px-4 py-2">
              <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-6 min-h-6 lg:text-black text-white"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="M11.5 5v12.079l-5.792-5.792L5 12l7 7l7-7l-.708-.713l-5.792 5.792V5z"
                    className="min-w-6 min-h-6"
                    style={{ width: "24px", height: "24px" }}
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="absolute top-0 right-0 ">
          <button className="right">
            <div className="px-4 py-2" onClick={Pre}>
              <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full lg:bg-gray-100 sm:bg-[rgba(255,255,255,0.1)] max-[630px]:bg-[rgba(255,255,255,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="min-w-6 min-h-6 lg:text-black text-white"
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="M11.5 19V6.921l-5.792 5.792L5 12l7-7l7 7l-.708.713L12.5 6.921V19z"
                    className="min-w-6 min-h-6"
                    style={{ width: "24px", height: "24px" }}
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortP;
