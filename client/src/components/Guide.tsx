/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from '@tanstack/react-query'
import '../styles/Guide.css'

const Guide = () => {
  interface Video {
    videoID: string;
    channelID: string;
    playlistID: string;
    videoURL: string;
    videoTitle: string;
    videoDescription: string;
    videoUploadDate: string;
  }

/************************************** FETCH GUIDE **************************************/

  const { isPending, error, data } = useQuery({
    queryKey: ["shows"],
    queryFn: () => fetch("/watch").then((res) => res.json()),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  // create divs for each show
  const shows = data.map((show: Video) => (
    <div key={show.videoID} className="Show">
      <h3>{show.videoTitle}</h3>
      <p>{show.videoUploadDate}</p>
    </div>
  ));

  return (
    <>
    <div className="ChannelList">
      <div className="Channel"> <h3>24 FIRST THINGS FIRST</h3> </div>
      <div className="Channel"> <h3>25 FLAT EARTH DAVE</h3></div>
      <div className="Channel"> <h3>26 BEN EATER</h3></div>
      <div className="Channel"> <h3>27 NASA</h3></div>
    </div>
    
      <div className="ChannelScroller">{shows}</div>
      <div className="ChannelScroller">{shows}</div>
      <div className="ChannelScroller">{shows}</div>
      <div className="ChannelScroller">{shows}</div>
    </>
  );
};

export default Guide;