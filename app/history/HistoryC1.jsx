"use client";
import React, { useState } from "react";
import VideoC1 from "@/components/VideoC1";
import Tick from "@/components/icon/Tick";
const HistoryC1 = (props) => {
  const [video, setVideo] = useState([
    {
      index: "1",
      imageV:
        "https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      title:
        "LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court",
      TV: "Capital TV",
      Kilo: "19k views",
      icon: Tick,
      short:
        "#latifkhosa #aitzazahsan #shoaibshaheen #ptichairmanimrankhan #ciphercase #adialajail #batsymbol #naeemhaiderpanjutha...",
    },
    {
      index: "2",
      imageV:
        "https://img.freepik.com/premium-psd/psd-music-festival-event-flyer-template-social-media-post-with-red-color-wood-background_507402-603.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      title:
        "LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court",
      TV: "Capital TV",
      Kilo: "19k views",
      icon: Tick,
      short:
        "#latifkhosa #aitzazahsan #shoaibshaheen #ptichairmanimrankhan #ciphercase #adialajail #batsymbol #naeemhaiderpanjutha...",
    },
    {
      index: "3",
      imageV:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      title:
        "LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court",
      TV: "Capital TV",
      Kilo: "19k views",
      icon: Tick,
      short:
        "#latifkhosa #aitzazahsan #shoaibshaheen #ptichairmanimrankhan #ciphercase #adialajail #batsymbol #naeemhaiderpanjutha...",
    },
    {
      index: "4",
      imageV:
        "https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      title:
        "LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court",
      TV: "Capital TV",
      Kilo: "19k views",
      icon: Tick,
      short:
        "#latifkhosa #aitzazahsan #shoaibshaheen #ptichairmanimrankhan #ciphercase #adialajail #batsymbol #naeemhaiderpanjutha...",
    },
    {
      index: "5",
      imageV:
        "https://img.freepik.com/premium-vector/live-webinar-social-media-post_103645-611.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      title:
        "LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court",
      TV: "Capital TV",
      Kilo: "19k views",
      icon: Tick,
      short:
        "#latifkhosa #aitzazahsan #shoaibshaheen #ptichairmanimrankhan #ciphercase #adialajail #batsymbol #naeemhaiderpanjutha...",
    },
    {
      index: "6",
      imageV:
        "https://img.freepik.com/premium-psd/bus-stop-billboard-mockup_23-2147912068.jpg?size=626&ext=jpg",
      image:
        "https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais",
      title:
        "LIVE | Level Playing Field to PTI | Latif Khosa Emergency Media Talk Outside Supreme Court",
      TV: "Capital TV",
      Kilo: "19k views",
      Icon: Tick,
    },
  ]);
  const removeElement = (id) => {
    const newVideo = video.filter((videos) => videos.index !== id);
    setVideo(newVideo);
  };
  return (
    <div className="">
      .
      <h1 className="text-[36px] lg:px-6 sm:px-3 max-[630px]:px-3 pt-6 pb-1 font-bold">
        Watch History
      </h1>
      <div className="grid grid-cols-6 relative lg:pb-16 sm:pb-[115px] max-[630px]:pb-[115px]">
        <div className="lg:col-span-4 sm:col-span-6 max-[630px]:col-span-6 mx-3 ">
          <p className="text-[20px] font-[700] lg:px-6 pt-6 pb-2">Today</p>
          {video.map((menu, index) => {
            return (
              <div key={index} className="mt-3">
                <div className="flex lg:h-[128px]  overflow-hidden">
                  <video
                    className="lg:max-h-[128px] sm:max-h-[90px] sm:min-w-[160px] object-cover max-[600px]:min-w-[160px] max-[630px]:max-h-[90px] mr-4 rounded-lg"
                    poster={menu.imageV}
                  >
                    <source
                      src="https://www.youtube.com/watch?v=geDJIcOU7dg"
                      className="w-100"
                      type="video/mp4"
                    />
                  </video>
                  <div className="group/item">
                    <div className="flex">
                      <h3 className="xl:text-[18px] sm:text-[14px] max-[600px]:text-[14px] line-clamp-3 font-[400] mr-2">
                        {menu.title}
                      </h3>
                      <div className="flex group/edit invisible group-hover/item:visible">
                        <div
                          className="w-10 h-10"
                          onClick={() => removeElement(menu.index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 15 15"
                            {...props}
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793L2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-10 h-10 lg:invisible group-hover/item:visible sm:visible max-[630px]:visible">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            {...props}
                          >
                            <g fill="none">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <p className="text-xs font-[400] text-[#606060]">
                        {menu.TV}
                      </p>
                      {/* <menu.Icon /> */}
                      <div className="w-[3px] h-[3px] bg-[#606060] rounded-full mx-1">
                        {" "}
                        .
                      </div>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"></path></svg> */}

                      <p className="text-xs font-[400] text-[#606060]">
                        {menu.Kilo}
                      </p>
                    </div>
                    <p className="text-xs font-[400] lg:flex sm:hidden max-[600px]:hidden text-[#606060] my-2">
                      {menu.short}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:block sm:hidden  max-[630px]:hidden right-0 lg:col-span-2 overflow-y-auto px-7 mt-2 mb-[50px]">
          <div className="mt-1 mb-2 mx-4 py-2 ">
            <div className=" relative h-10 grid xl:grid-cols-3 lg:grid-cols-2">
              <input
                className=" border-b-[1px] col-span-2 border-[#606060] outline-0 text-[14px] flex items-center h-10 ps-8"
                placeholder="Search Watch Later"
              />
              <div className="absolute left-0 bottom-[-0.1rem] flex items-center h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  {...props}
                >
                  <path
                    fill="currentColor"
                    d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37"
                    className="w-8 h-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 px-4 mt-4">
            <div className="flex items-center justify-start col-span-2 relative h-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-1.5 ml-[-6px]"
                viewBox="0 0 24 24"
                {...props}
              >
                <path
                  fill="currentColor"
                  d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
                ></path>
              </svg>
              <p className=" text-[14px] font-[500]">Clear all watch history</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 px-4 mt-4">
            <div className="flex items-center justify-start col-span-2 relative h-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-1.5 ml-[-6px]"
                viewBox="0 0 24 24"
                {...props}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M13 15L8 18L8 6L13 9L13 9">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      dur="0.6s"
                      keyTimes="0;0.33;1"
                      values="M13 15L8 18L8 6L13 9L13 9;M13 15L8 18L8 6L13 9L13 15;M9 18L7 18L7 6L9 6L9 18"
                    ></animate>
                  </path>
                  <path d="M13 9L18 12L18 12L13 15L13 15">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      dur="0.6s"
                      keyTimes="0;0.33;1"
                      values="M13 9L18 12L18 12L13 15L13 15;M13 9L18 12L18 12L13 15L13 9;M15 6L17 6L17 18L15 18L15 6"
                    ></animate>
                  </path>
                </g>
              </svg>
              <p className=" text-[14px] font-[500]">Pause watch history</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 px-4 mt-4">
            <div className="flex items-center justify-start col-span-2 relative h-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-1.5 ml-[-6px]"
                viewBox="0 0 24 24"
                {...props}
              >
                <g fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    fill="currentColor"
                    d="m5.399 5.88l.375-.65a.75.75 0 0 0-.925.14zM3.4 9.344l-.717-.222a.75.75 0 0 0 .342.871zm-.002 5.311l-.375-.65a.75.75 0 0 0-.341.872zm2 3.464l-.55.51a.75.75 0 0 0 .925.14zm4.6 2.655h-.75c0 .35.243.653.584.731zm4.001.002l.167.732a.75.75 0 0 0 .583-.732zM18.6 18.12l-.375.65a.75.75 0 0 0 .925-.14zm1.998-3.466l.717.222a.75.75 0 0 0-.342-.871zm.002-5.311l.375.65a.75.75 0 0 0 .341-.872zm-2-3.465l.55-.509a.75.75 0 0 0-.925-.14zM14 3.225h.75a.75.75 0 0 0-.583-.731zm-4-.002l-.167-.732a.75.75 0 0 0-.583.732zm4 1.849h-.75zm5 8.66l-.375.65zm-2 3.464l-.375.65zM5 13.732l.375.65zm2-6.928l-.375.65zM4.117 9.566a8.24 8.24 0 0 1 1.831-3.177l-1.1-1.02a9.74 9.74 0 0 0-2.164 3.754zm.738 6.559a8.279 8.279 0 0 1-.74-1.69l-1.432.443a9.78 9.78 0 0 0 .873 1.997zm1.094 1.486a8.28 8.28 0 0 1-1.094-1.486l-1.299.75a9.78 9.78 0 0 0 1.292 1.755zm7.884 2.435a8.24 8.24 0 0 1-3.666-.002l-.334 1.462a9.741 9.741 0 0 0 4.334.003zm6.05-5.612a8.241 8.241 0 0 1-1.831 3.177l1.1 1.02a9.74 9.74 0 0 0 2.164-3.754zm-.738-6.559c.315.547.56 1.113.74 1.69l1.432-.443a9.778 9.778 0 0 0-.873-1.997zM18.05 6.389c.41.443.778.94 1.094 1.486l1.299-.75A9.778 9.778 0 0 0 19.15 5.37zm-7.884-2.435a8.24 8.24 0 0 1 3.666.002l.334-1.462a9.74 9.74 0 0 0-4.334-.003zm.583 1.118v-1.85h-1.5v1.85zM7.375 6.154L5.774 5.23l-.75 1.299l1.6.924zm-2.75 6.929l-1.601.924l.75 1.299l1.6-.924zm.75-3.465l-1.6-.923l-.75 1.3l1.6.923zm5.375 11.157v-1.847h-1.5v1.847zm-4.125-4.228l-1.601.924l.75 1.3l1.6-.925zm12.351.924l-1.601-.924l-.75 1.299l1.601.924zm-4.226 3.306v-1.849h-1.5v1.85zm5.476-12.083l-1.601.924l.75 1.3l1.601-.925zm.748 5.312l-1.599-.924l-.75 1.3l1.6.923zM14.75 5.072V3.225h-1.5v1.847zm3.476.158l-1.601.924l.75 1.3l1.601-.925zm-4.976-.158c0 2.117 2.292 3.44 4.125 2.381l-.75-1.299a1.25 1.25 0 0 1-1.875-1.082zm5.375 4.546c-1.833 1.059-1.833 3.705 0 4.764l.75-1.3a1.25 1.25 0 0 1 0-2.165zm-1.25 6.929c-1.833-1.059-4.125.264-4.125 2.381h1.5a1.25 1.25 0 0 1 1.875-1.082zm-6.625 2.381c0-2.117-2.292-3.44-4.125-2.381l.75 1.299a1.25 1.25 0 0 1 1.875 1.082zm-5.375-4.546c1.833-1.059 1.833-3.705 0-4.764l-.75 1.3a1.25 1.25 0 0 1 0 2.165zm3.875-9.31a1.25 1.25 0 0 1-1.875 1.082l-.75 1.3c1.833 1.058 4.125-.265 4.125-2.382z"
                  ></path>
                </g>
              </svg>
              <p className=" text-[14px] font-[500]">Manage all history</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 px-4 mt-1 ml-8">
            <div className="flex items-center justify-start col-span-2 relative h-10 ">
              <p className=" text-[14px] font-[500] text-[#606060]">Comments</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 px-4 mt-1 ml-8">
            <div className="flex items-center justify-start col-span-2 relative h-10 ">
              <p className=" text-[14px] font-[500] text-[#606060]">
                Community Post
              </p>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 px-4 mt-1 ml-8">
            <div className="flex items-center justify-start col-span-2 relative h-10 ">
              <p className=" text-[14px] font-[500] text-[#606060]">Chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryC1;
