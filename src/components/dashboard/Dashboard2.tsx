import Dashboard from "./Dashboard";
import "./Dashboard2.css";
import {useRef} from "react";

const Dashboard2 = () => {
    const dashContentRef = useRef(null);

  return (
    <div className="Dashboard2_main">
        <Dashboard dashContentRef={dashContentRef}/>
        <div className="dashboard2_child1">
            <div className="dashboard2_child2" ref={dashContentRef}>Hii</div>
        </div>
    </div>
  )
}

export default Dashboard2