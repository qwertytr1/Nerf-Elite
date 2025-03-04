import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src, poster }) => {
  return (
    <div data-vjs-player>
<video
    id="my-video"
    className="video-js"
    preload="auto"
        width="640"
        autoPlay
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
