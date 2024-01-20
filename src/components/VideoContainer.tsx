import { useSelector } from "react-redux"
import { StoreType } from "../store/store"
import VideoCard from "./VideoCard";
import ButtonList from "./ButtonList";

const VideoContainer = () => {
  const homeVideos: any = useSelector((store: StoreType) => store.video.homeVideos);
  // early return pattern
  if (!homeVideos) return null;

  return (
    <>
      <ButtonList />
      <div className="flex flex-wrap">
        {homeVideos?.map((video: any) => <VideoCard info={video} key={video.id} />)}
      </div>
    </>
  )
}

export default VideoContainer