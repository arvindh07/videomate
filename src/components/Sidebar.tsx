import { useSelector } from "react-redux"
import { sidebarlist } from "../constants/sidebar"
import { StoreType } from "../store/store";

const Sidebar = () => {
  const isMenuOpen = useSelector((store: StoreType) => store.app.isMenuOpen);

  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="hidden sm:block col-span-1 max-w-[120px]">
      {sidebarlist?.map((item) => {
        return (
          <div key={item.name} className="p-2 mx-2 flex flex-col items-center mt-3 hover:bg-black/30 cursor-pointer rounded-lg">
            <span className="text-2xl">{item.icon}</span>
            <p>{item?.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar