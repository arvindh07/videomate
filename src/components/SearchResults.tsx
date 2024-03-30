import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { SEARCH_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";

const SearchResults = () => {
    const [query] = useSearchParams();
    const searchText = query.get("search_query");
    const [searchResults, setSearchResults] = useState([]);

    const callSearchApi = async () => {
        const res = await fetch(`${SEARCH_VIDEOS}${searchText}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
        const json = await res.json();
        console.log(json.items);
        setSearchResults(json.items);
    }

    useEffect(() => {
        if(searchText){
            callSearchApi();
        }
        window.scroll(0, 0);
    }, [])

    return (
        <div className="flex flex-col">
            {searchResults?.map((res) => <VideoCard info={res} />)}
        </div>
    )
}

export default SearchResults