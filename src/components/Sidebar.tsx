import { useSelector } from "react-redux"
import { sidebarlist } from "../constants/sidebar"

const Sidebar = () => {
  const isMenuOpen = useSelector((store: any) => store.app.isMenuOpen);

  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="col-span-1">
      {sidebarlist?.map((item) => {
        return (
          <div key={item.name}>
            <span>{item.icon}</span>
            <p>{item?.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar