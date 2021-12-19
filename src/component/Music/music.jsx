import React from "react";
import ReactPlayer from "react-player";
import "./Music.css";
function Music() {
  return (
    <div className="music">
      <ReactPlayer
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        width="10vw"
        height="10vh"
        playing={false}
        controls={true}
      />
    </div>
  );
}

export default Music;