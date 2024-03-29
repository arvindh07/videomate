import { useDispatch, useSelector } from "react-redux"
import { StoreType } from "../store/store"
import VideoCard from "./VideoCard";
import ButtonList from "./ButtonList";
import ShimmerContainer from "./shimmer/ShimmerContainer";
import { useEffect } from "react";
import { appActions } from "../store/slices/appSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const homeVideos: any = useSelector((store: StoreType) => store.video.homeVideos);
  useEffect(() => {
    dispatch(appActions.openMenu());
  }, []);
  // early return pattern
  if (!homeVideos) return <ShimmerContainer />;

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