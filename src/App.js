import React from "react";
import main from "./main";

import { useEffect } from "react";

function App() {

  useEffect(() => {
    main()
  },[]) 
  
  return (
    <>
      <div id="scene-container" className="absolute top-0 left-0 z-[1] w-full h-full"></div>
      <div className="spin z-[2] flex flex-col items-center gap-1 absolute left-[50%] top-[75%] transform -translate-x-1/2 -translate-y-3/4">
        <h2 className=" text-white font-bold text-[1.5rem] md:text-[2rem] w-fit text-nowrap">Spin the earth</h2>
        <h2 className=" text-white font-bold text-[1rem] md:text-[1.5rem] w-fit text-nowrap">It's also zoomable!</h2>
      </div>
    </>
  )
}

export default App;