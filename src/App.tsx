import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import useAPP from "./store/useApp";

function App() {
  const setTargetUser = useAPP((store) => store.setTargetUser);
  useEffect(() => {
    const ESCAPE = "Escape";
    document.addEventListener("keydown", (e) =>
      e.key === ESCAPE ? setTargetUser(-1) : null
    );
  }, [setTargetUser]);
  return (
    <div className="flex items-stretch h-screen text-gray-100 text-sm">
      <div className="w-full min-w-max sm:w-1/3 2xl:w-1/4">
        <Sidebar />
      </div>
      <div className="hidden sm:block flex-grow sm:w-2/3 2xl:w-3/4  ">
        <Preview />
      </div>
    </div>
  );
}

export default App;
