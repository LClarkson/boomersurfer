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

  const { isPending, error, data } = useQuery({
    queryKey: ["shows"],
    queryFn: () => fetch("/watch").then((res) => res.json()),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const shows = data.map((show: Video) => (
    <div key={show.videoID} className="Show">
      <h3>{show.videoTitle}</h3>
      <p>{show.videoUploadDate}</p>
    </div>
  ));

  return (
    <>
      <div className="ChannelScroller">{shows}</div>
    </>
  );
};

export default Guide;