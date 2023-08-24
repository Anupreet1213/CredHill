import "./DashboardPage.css";
import React, { useRef, useState } from "react";
import Sidebar from "../components/dashboard/Main/Sidebar";
import Navbar from "../components/dashboard/Main/Navbar";

const DashboardPage: React.FC = () => {
  const dashContentRef = useRef(null);
  
  const [dashContent, setDashContent] = useState(0);
  const [open, setOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true); 

  return (
    <div className="Dashboard2_main">
      <Sidebar dashContentRef={dashContentRef} setDashContent={setDashContent} open={open} setOpen={setOpen} loading={loading} setLoading={setLoading}/>
      <Navbar open={open} loading={loading}/>
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

export default DashboardPage;