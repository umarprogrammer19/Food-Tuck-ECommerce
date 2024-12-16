'use client';

import { useState, useRef } from "react";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa"; // Using react-icons
import ActivitySection from "../../../public/assets/activebanner.png";

const ActiveBanner = () => {
  const [isActivePlayer, setIsActivePlayer] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${ActivitySection.src})` }}
      ></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row justify-end items-center px-5 py-16 md:px-12 md:py-12">
        {/* Description Section */}
        <div className="md:w-1/2 text-left text-white">
          <h3 className="text-2xl font-semibold text-orange-400">Restaurant Active Process</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Document Every Food Bean Process until its saved</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem unde facere consectetur dolor iure soluta.
          </p>
          <div className="flex justify-start space-x-6">
            {/* Read More Button */}
            <a
              href="/about"
              className="py-3 px-4 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-full"
            >
              Read More
            </a>
            {/* Play Video Button */}
            <button
              className="py-3 px-6 border-2 border-white text-white hover:bg-transparent hover:text-white rounded-full"
              onClick={() => {
                setIsPlayed(true);
                setIsActivePlayer(true);
                if (videoRef.current) videoRef.current.currentTime = 0;
                videoRef.current?.play();
              }}
            >
              <FaPlay className="w-6 h-6 mr-2 inline" />
              Play Video
            </button>
          </div>
        </div>

        {/* Video Player Popup */}
        <div
          className={`fixed inset-0 bg-black/90 flex items-center justify-center z-50 ${!isActivePlayer ? "hidden" : ""}`}
        >
          {/* Close Icon */}
          <FaTimes
            className="absolute top-4 right-4 text-white w-8 h-8 cursor-pointer"
            onClick={() => {
              setIsPlayed(false);
              setIsActivePlayer(false);
              videoRef.current?.pause();
            }}
          />

          {/* Play/Pause Icon */}
          {isPlayed ? (
            <FaPause
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 cursor-pointer"
              onClick={() => {
                setIsPlayed(false);
                videoRef.current?.pause();
              }}
            />
          ) : (
            <FaPlay
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 cursor-pointer"
              onClick={() => {
                setIsPlayed(true);
                videoRef.current?.play();
              }}
            />
          )}

          {/* Video Player */}
          <video ref={videoRef} className="w-4/5 md:w-3/4 max-w-4xl z-10" src="/assets/resvideo.mp4" controls />

        </div>
      </div>
    </div>
  );
};

export default ActiveBanner;
