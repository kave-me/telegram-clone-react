import BurgerIcon from "./BurgerIcon";
import {ChatList} from "./ChatList";

function SearchBar() {
  return <div className={'flex flex-stretch h-10 w-full my-2'}>
  <span className="w-1/6 h-full flex align-middle justify-center " >
    <BurgerIcon />
  </span>
    <span className="flex-grow-1 w-5/6 pr-8">
    <input className="w-full h-full px-3 rounded-md bg-gray-600 focus:outline-none focus:ring ring-gray-500" placeholder={'Search'}/>
  </span>
  </div>
}

const Sidebar = () => {
  return(
    <div className={'w-full h-screen flex flex-col bg-gray-700 border-0  sm:border-r-2 sm:border-gray-900'}>
      <SearchBar />
      <ChatList />
    </div>
  )
}

export default Sidebar;
