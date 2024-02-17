import { useState } from 'react';
import './styles/App.css';
import YoutubePlayer from './components/YoutubePlayer.tsx';
import TimeBar from './components/TimeBar.tsx';
import ChannelInfo from './components/ChannelInfo.tsx';
import Remote from './components/Remote.tsx';


function App() {
  /************************************** STATE INIT **************************************/

  const [videoID, setVideoID] = useState("l7rce6IQDWs");

  /************************************* CHANGE CHANNEL ***********************************/

  const videos = ["l7rce6IQDWs", "8v0QwgWPqPU", "he-7vs0BkLE", "icwYkOun_Po"];

  const changeChannel = (): void => {
    const randomVideo = Math.floor(Math.random() * videos.length);
    setVideoID(videos[randomVideo]);
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