import { ChatList } from "./Chat";
import { SearchBar } from "./SearchBar";

const Sidebar = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-800 border-0  sm:border-r-2 sm:border-gray-900">
      <SearchBar />
      <ChatList />
    </div>
  );
};

export default Sidebar;
