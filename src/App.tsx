import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import useApp from "./store/useApp";
import { UserInformationModal } from "./UserInfoModal";

function App() {
  const setTargetUser = useApp((store) => store.setTargetUser);
  const showUserInformationModal = useApp(
    (store) => store.showUserInformationModal
  );

  // Keyboard event listener list
  useEffect(() => {
    const ESCAPE = "Escape";
    const handler = (e: any) => (e.key === ESCAPE ? setTargetUser(-1) : null);
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [setTargetUser]);

  return (
    <div className="flex items-stretch h-screen text-gray-100 text-sm">
      <div className="w-full min-w-max sm:w-1/3 2xl:w-1/4">
        <Sidebar />
      </div>
      <div className="hidden sm:block flex-grow sm:w-2/3 2xl:w-3/4  ">
        <Preview />
      </div>

      {/*  Modal list*/}
      {showUserInformationModal && <UserInformationModal />}
    </div>
  );
}

export default App;
