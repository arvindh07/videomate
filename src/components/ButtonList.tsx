import { btnList } from "../constants/btnList"

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
        {btnList?.map((btn) => {
            return (<div key={btn} className="bg-black/[0.08] my-2 mx-3 px-3 py-1 rounded-lg 
            cursor-pointer hover:bg-black hover:text-white transition-all duration-200">{btn}</div>)
        })}
    </div>
  )
}

export default ButtonList