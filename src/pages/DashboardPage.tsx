import "./DashboardPage.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Main/Sidebar";
import MobileSidebar from "../components/dashboard/Main/MobileSidebar";
// import Navbar from "../components/dashboard/Main/Navbar";

const DashboardPage: React.FC = () => {
  
  const [open, setOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true); 

  //Sidebar open toggle for mobile
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 640) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // ---------------------
  // const [open2, setOpen2] = useState<boolean>(true);

  // const handleClick = () => {
  //   setOpen2(!open2);
  // };

  return (
  
    <div className="dashboard_main">
      {
        screenWidth > 840
        ?
        <Sidebar open={open} setOpen={setOpen} loading={loading} setLoading={setLoading}/>
        :
        <MobileSidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      }
      <div className="dashboard_right">
        <div className="dashboard_navbar" onClick={handleDrawerToggle}>navbar</div>
        
      
          <div className="dashboard_right_second">
            <div>Heelu Heelu dlflkjdfs</div>
           
          </div>
          
        
      </div>
    </div>
  )
}

export default DashboardPage;