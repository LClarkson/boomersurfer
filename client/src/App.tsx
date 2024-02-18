import { useState, useEffect } from 'react';
import './styles/App.css';
import YoutubePlayer from './components/YoutubePlayer.tsx';
import TimeBar from './components/TimeBar.tsx';
import ChannelInfo from './components/ChannelInfo.tsx';
import Remote from './components/Remote.tsx';


function App() {
  /************************************** STATE INIT **************************************/

  const [videos, setVideos] = useState<Video[]>([]);
  const [videoID, setVideoID] = useState('');

  /************************************* CHANGE CHANNEL ***********************************/

  interface Video {
   video: string;
  }

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/watch");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const videosData: Video[] = await response.json();
        setVideos(videosData);
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

  const changeChannel = (): void => {
    const randomVideoIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomVideoIndex];
    setVideoID(`${randomVideo}`);
  };

  /****************************************** HTML ****************************************/

  return (
    <>
      <div id="viewPort">
        <ChannelInfo />
        <YoutubePlayer videoID={videoID} videoTime={50} />
      </div>
      <div id="timeBar">
        <TimeBar />
      </div>
      <div id="remote">
        <Remote changeChannel={changeChannel} />
      </div>
    </>
  );
}

export default App;
