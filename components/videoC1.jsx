"use client";
import React from "react";
import Video from "./Video";
import Image from "next/image";
import { usePathname } from "next/navigation";
const VideoC1 = () => {
  const Pathname = usePathname();
  return (
    <div className="">
      {Pathname !== "/subcription3v" ? (
        <div className="grid xl:grid-cols-4 min-[2020px]:grid-cols-6 min-[2420px]:grid-cols-8 min-[2220px]:grid-cols-7 min-[1720px]:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 min-[864px]:grid-cols-3 max-[864px]:grid-cols-2 min-[578px]:grid-cols-2 max-[578px]:grid-cols-1 mx-4 my-6 gap-4 mb-4">
          <div className="w-100">
            {" "}
            <div className="items-center w-100 justify-center rounded ">
              <Video imageV="https://img.freepik.com/free-psd/fashion-show-poster-template_23-2148772249.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
            </div>
          </div>
          <div className="w-100">
            <div className="items-center justify-center rounded ">
              <Video imageV="https://img.freepik.com/free-psd/radial-social-media-instagram-facebook-post-template_125755-384.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
            </div>
          </div>
          <div className="w-100">
            <div className="items-center justify-center rounded ">
              <Video imageV="https://img.freepik.com/premium-vector/live-webinar-social-media-post_103645-611.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
            </div>
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/premium-psd/tabligh-akbar-poster-design-template-promotion_693064-312.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/premium-psd/bus-stop-billboard-mockup_23-2147912068.jpg?size=626&ext=jpg" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/premium-psd/psd-music-festival-event-flyer-template-social-media-post-with-red-color-wood-background_507402-603.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 min-[2020px]:grid-cols-6 min-[2420px]:grid-cols-8 min-[2220px]:grid-cols-7 min-[1720px]:grid-cols-5 md:grid-cols-1 min-[864px]:grid-cols-1 max-[864px]:grid-cols-1 min-[578px]:grid-cols-1 max-[578px]:grid-cols-1 mx-4 my-6 gap-4 mb-4">
          <div className="w-100">
            {" "}
            <div className="items-center w-100 justify-center rounded ">
              <Video imageV="https://img.freepik.com/free-psd/fashion-show-poster-template_23-2148772249.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
            </div>
          </div>
          <div className="w-100">
            <div className="items-center justify-center rounded ">
              <Video imageV="https://img.freepik.com/free-psd/radial-social-media-instagram-facebook-post-template_125755-384.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
            </div>
          </div>
          <div className="w-100">
            <div className="items-center justify-center rounded ">
              <Video imageV="https://img.freepik.com/premium-vector/live-webinar-social-media-post_103645-611.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
            </div>
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/free-psd/club-dj-party-flyer-social-media-post_505751-3058.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/premium-psd/tabligh-akbar-poster-design-template-promotion_693064-312.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/premium-psd/bus-stop-billboard-mockup_23-2147912068.jpg?size=626&ext=jpg" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
          <div className="items-center justify-center rounded ">
            <Video imageV="https://img.freepik.com/premium-psd/psd-music-festival-event-flyer-template-social-media-post-with-red-color-wood-background_507402-603.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoC1;
