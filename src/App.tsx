import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="bg-gray-800 flex items-stretch h-screen">
      <div className="w-full md:w-2/5 2xl:w-1/4">
        <Sidebar/>
      </div>
      <div className="hidden md:block flex-grow">
        <Preview/>
      </div>
    </div>
  );
}

export default App;
