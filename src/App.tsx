import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body"
import Header from "./components/Header"
import VideoContainer from "./components/VideoContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />
      },
      {
        path: "/watch",
        element: <WatchVideo />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
      {/* 
        Header
          logo
          search
          userinfo
        Sidebar
          menu items
        Main Container
          button list
          Video Container
            Video Card
       */}
    </>
  )
}

export default App
