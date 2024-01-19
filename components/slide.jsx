"use client";
import React, { Component } from "react";
import "../app/globals.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video2 from "./Video2";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: false,
  className: "notes-slider",
  marginLeft: 20,
  responsive: [
    {
      breakpoint: 2448,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 2220,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 2020,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1720,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1520,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 998,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 864,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 778,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const Slide = (props) => {
  return (
    <div>
      {" "}
      <div className="flex w-24 ml-6 mb-6 justify-center items-center ">
        <div className="w-9">
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
        <p className="text-[20px] font-bold"> Shorts </p>
      </div>
      <Slider {...settings}>
        <div>
          <Video2 imageS="https://img.freepik.com/premium-psd/dj-music-party-flyer-square-flyer-template_541010-305.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/free-psd/grand-finale-match-soccer-game-social-media-post-template_47987-16331.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/free-psd/food-social-media-promotion-instagram-banner-post-design-template_202595-479.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/free-vector/sporting-event-poster-template_52683-42528.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/free-vector/border-design-with-wild-animals_1308-29913.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/premium-vector/template_987671-101.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/premium-psd/banner-offer-gamer-3d-sale-products-brazil_475765-340.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/premium-photo/clash-with-aliens-fantastic-battle_250484-4913.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
        <div>
          <Video2 imageS="https://img.freepik.com/free-psd/gamer-background-with-accessories_1419-2365.jpg?size=626&ext=jpg&ga=GA1.1.1351396951.1702663879&semt=ais" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
