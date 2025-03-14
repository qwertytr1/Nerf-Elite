import React, { useRef, useEffect } from "react";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
    }

    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [src]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js"
        width="640"
        height="360"
        poster={poster}
        controls
        autoPlay
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
