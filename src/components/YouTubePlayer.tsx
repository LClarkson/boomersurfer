/* eslint-disable @typescript-eslint/no-explicit-any */
import YouTube from "react-youtube";

// interface to define custom type for YoutubePlayer component
interface YoutubePlayerProps {
  videoID: string;
  videoTime: number;
}

function YoutubePlayer({ videoID }: YoutubePlayerProps) {
  
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      start: 30,
    },
  };

  return (
    <div className="portWindow" id="ytPlayer">
      <div id="overlayBlock"></div>
      <YouTube id="yt" videoId={videoID} opts={opts} />
    </div>
  );
}

export default YoutubePlayer;