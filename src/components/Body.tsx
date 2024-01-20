import { Outlet } from "react-router-dom"
import useFetchVideos from "../hooks/useFetchVideos"
import Sidebar from "./Sidebar";

const Body = () => {
  useFetchVideos();
  return (
    <div className="grid grid-flow-col">
        <Sidebar />
        <div className="flex flex-col items-start justify-start col-span-11 mt-4">
          <Outlet />
        </div>
    </div>
  )
}

export default Body