import React from 'react';

const VideoStream = ({ streamType }) => {
  // Replace with a placeholder video source or an actual stream URL
  const videoSource = streamType === 'thermal' 
    ? 'https://www.w3schools.com/html/mov_bbb.mp4'  // Example video
    : 'https://www.w3schools.com/html/movie.mp4';    // Example video

  return (
    <video src={videoSource} autoPlay controls width="100%" height="300px" />
  );
};

export default VideoStream;
