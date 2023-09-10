import "./DashboardPage.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Main/Sidebar";
import MobileSidebar from "../components/dashboard/Main/MobileSidebar";
import Navbar from "../components/dashboard/Main/Navbar";
import Dashboard from "../components/dashboard/Dashboard/dashboard";
// import { useTheme } from "../contexts/ThemeContext";


const DashboardPage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [rightComponent, setRightComponent] = useState<number>(0);

  //Sidebar open toggle for mobile
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 896) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dashboard_main">
      {screenWidth > 896 ? (
        <Sidebar
          open={open}
          setOpen={setOpen}
          loading={loading}
          setLoading={setLoading}
          rightComponent={rightComponent}
          setRightComponent={setRightComponent}
        />
      ) : (
        <MobileSidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      )}
      <div className="dashboard_right">
        <Navbar handleDrawerToggle={handleDrawerToggle} />

        {
          rightComponent == 0
          ?
          <Dashboard />
          :
          <div>heeelu</div>
        }
      </div>
    </div>
  );
};

export default DashboardPage;
