import Dashboard from "./Dashboard";
import "./Dashboard2.css";
import React, {useRef, useState} from "react";

const Dashboard2: React.FC = () => {
    const dashContentRef = useRef(null);

    const [dashContent, setDashContent] = useState(0);

  return (
    <div className="Dashboard2_main">
        <Dashboard dashContentRef={dashContentRef} setDashContent={setDashContent} />
        <div className="dashboard2_child1">
        {
          dashContent === 0 
          ?
          <div className="dashboard2_child2" ref={dashContentRef}>Hii 0</div>
          :
          dashContent === 1
          ?
          <div className="dashboard2_child2" ref={dashContentRef}>Hii 1</div>
          :
          <div className="dashboard2_child2" ref={dashContentRef}>Hii 2</div>
        }
        </div>
    </div>
  )
}

export default Dashboard2