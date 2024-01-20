import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { appActions } from "../store/slices/appSlice";

const WatchVideo = () => {
    const dispatch = useDispatch();
    const [search] = useSearchParams();
    const videoId = search.get("v");

    useEffect(() => {
        dispatch(appActions.closeMenu());
    }, []);
    
    return (
        <div className="w-4/6 p-4 pl-20">
            <iframe 
                className="w-full h-[70vh]"
                src={`https://www.youtube.com/embed/${videoId}?si=ADXThPlrVgvGP-49`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default WatchVideo