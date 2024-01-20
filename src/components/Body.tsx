import ButtonList from "./ButtonList"
import Sidebar from "./Sidebar"
import VideoContainer from "./VideoContainer"


const Body = () => {
  return (
    <div className="grid grid-flow-col">
        <Sidebar />
        <div className="flex flex-col items-start justify-start col-span-11 mt-4">
          <ButtonList />
          <VideoContainer />
        </div>
    </div>
  )
}

export default Body