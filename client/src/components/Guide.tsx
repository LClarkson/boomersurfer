import { useState, useEffect } from 'react';
import '../styles/Guide.css';

const Guide = () => {

  const [shows, setShows] = useState<Video[]>([]);
  interface Video {
    videoID: string;
    channelID: string;
    playlistID: string;
    videoURL: string;
    videoTitle: string;
    videoDescription: string;
    videoUploadDate: string;
   }

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/watch");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const videosData: Video[] = await response.json();
        setShows(videosData);
        console.log(videosData);
              
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching videos:", (error as Error).message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };

    fetchVideos();
  }, []);

    return (
      <>
        <div className="ChannelScroller">
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
        </div>
        <div className="ChannelScroller">
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
        </div>
        <div className="ChannelScroller">
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
        </div>
        <div className="ChannelScroller">
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
          <div className="Show"></div>
        </div>
      </>
    );

}

export default Guide;