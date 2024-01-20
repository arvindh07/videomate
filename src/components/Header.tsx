import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoFill } from "react-icons/ri";
import { HiMiniUserCircle } from "react-icons/hi2";
import { RiSettings3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { appActions } from "../store/slices/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const handleToggleMenu = () => {
        dispatch(appActions.toggleMenu());
    }

    return (
        <div className="shadow-md grid grid-flow-col px-4 py-3 items-center">
            <div className="flex col-span-1 items-center gap-x-6">
                <RxHamburgerMenu className="text-xl cursor-pointer" onClick={handleToggleMenu} />
                <a onClick={() => window.location.href="/"}>
                    <div className="flex items-center justify-center text-red-500 text-lg gap-x-1 cursor-pointer">
                        <RiVideoFill />
                        <span className="text-xl">VideoMate</span>
                    </div>
                </a>
            </div>
            <div className="col-span-10 flex items-center justify-center">
                <input
                    type="text"
                    className="border-y-2 border-l-2 border-gray-200 px-6 py-2 w-4/6 rounded-s-full"
                    placeholder="Search" />
                <div className="bg-gray-300 px-5 py-3 rounded-e-full cursor-pointer hover:bg-gray-200 transition-all">
                    <IoSearchSharp className="rounded-e-full text-xl" />
                </div>
            </div>
            <div className="col-span-1 flex text-2xl gap-x-6">
                <RiSettings3Fill className="cursor-pointer"/>
                <HiMiniUserCircle className="cursor-pointer"/>
            </div>
        </div>
    )
}

export default Header;