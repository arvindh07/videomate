import { useEffect } from "react";
import { CHANNEL_URL, YOUTUBE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { videoActions } from "../store/slices/videoSlice";
import { StoreType } from "../store/store";
import { HomeVideos } from "./types";

const useFetchVideos = () => {
    const dispatch = useDispatch();
    const homeVideos = useSelector((store: StoreType) => store?.video?.homeVideos);

    useEffect(() => {
        if(!homeVideos){
            fetchVideos();
        }
    }, [])

    const fetchVideos = async () => {
        let finalData: any = [];
        const res = await fetch(YOUTUBE_URL);
        const json = await res.json();
        finalData = json.items;
        
        if (json) {
            finalData = finalData?.map(async (video: any) => {
                const result: HomeVideos = { ...video, channel: null };
                const channelId = video?.snippet?.channelId;
                const res = await fetch(`${CHANNEL_URL}&id=${channelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
                const json = await res.json();
                result.channel = json?.items?.[0];
                return result;
            })
        }
        dispatch(videoActions.setHomeVideos(await Promise.all(finalData)));
    }
}

export default useFetchVideos;