import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoFill } from "react-icons/ri";
import { HiMiniUserCircle } from "react-icons/hi2";
import { RiSettings3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../store/slices/appSlice";
import { useEffect, useState } from "react";
import { YT_SEARCH } from "../utils/constants";
import { StoreType } from "../store/store";
import { searchActions } from "../store/slices/cacheSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [suggestions, setSuggestions] = useState<Array<string>>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const cacheResults: any = useSelector((store: StoreType) => store.cache);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(appActions.toggleMenu());
    }

    const searchApi = async () => {
        const searchResults = await fetch(YT_SEARCH + searchText, { mode: 'cors' });
        const searchJson = await searchResults.json();
        setSuggestions(searchJson[1]);
        dispatch(searchActions.setSearchResults({ [searchText] : searchJson[1] }));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(cacheResults[searchText]){
                setSuggestions(cacheResults[searchText]);
            } else{
                searchApi();
            }
        }, 200);

        return () => clearTimeout(timer)
    }, [searchText])

    return (
        <div className="sticky top-0 z-500 bg-white shadow-md grid grid-flow-col px-4 py-3 items-center">
            <div className="flex col-span-1 items-center gap-x-6">
                <RxHamburgerMenu className="text-xl cursor-pointer" onClick={handleToggleMenu} />
                <a onClick={() => window.location.href = "/"}>
                    <div className="flex items-center justify-center text-red-500 text-lg gap-x-1 cursor-pointer">
                        <RiVideoFill />
                        <span className="text-xl">VideoMate</span>
                    </div>
                </a>
            </div>
            <div className="col-span-10 flex flex-col items-center justify-center">
                <div className="flex w-full justify-center items-center">
                    <input
                        type="text"
                        value={searchText}
                        className="border-y-2 border-l-2 border-gray-200 px-10 py-2 w-4/6 rounded-s-full"
                        placeholder="Search"
                        onChange={(e) => setSearchText(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => {
                            // setShowSuggestions(false)
                        }}
                    />
                    <div className="bg-gray-300 px-5 py-3 rounded-e-full cursor-pointer hover:bg-gray-200 transition-all">
                        <IoSearchSharp className="rounded-e-full text-xl" />
                    </div>
                </div>
                {showSuggestions && suggestions?.length > 0 && <div className="fixed top-14 w-[47%] flex mt-[1px] -ml-14">
                    <ul className="py-2 bg-white w-full border border-gray-200 rounded-lg">
                        {suggestions?.map((li) => (
                            <div
                                key={li}
                                onClick={() => {
                                    setShowSuggestions(false);
                                    setSearchText(li);
                                    navigate("/results?search_query=" + li);
                                }} 
                                className="flex items-center px-4 py-2 gap-x-2 hover:bg-black/20 transition">
                                <IoSearchSharp className="rounded-e-full text-xl" />
                                <li>{li}</li>
                            </div>
                        ))}
                    </ul>
                </div>}
            </div>
            <div className="col-span-1 flex text-2xl gap-x-6">
                <RiSettings3Fill className="cursor-pointer" />
                <HiMiniUserCircle className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Header;