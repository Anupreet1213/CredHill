import "./DashboardPage.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Main/Sidebar";
import MobileSidebar from "../components/dashboard/Main/MobileSidebar";
import Navbar from "../components/dashboard/Main/Navbar";
import Dashboard from "../components/dashboard/Dashboard/Dashboard";
import { useTheme } from "../contexts/ThemeContext";
// import Create from "../components/invoice/Create/Create";
import List from "../components/invoice/List/List";
import CreateTest from "../components/invoice/Create/CreateTest";
// import { Outlet } from "react-router-dom";

const DashboardPage: React.FC = () => {
  // Tells whether sidebar is open or close on desktop
  const [open, setOpen] = useState<boolean>(true);

  // Enables sidebar close and open on hover
  const [sidebarMovement, setSidebarMovement] = useState<boolean>(true);

  // Set the component on right side of dashboard (Eg. Dashboard, Analytics, Edit Invoice, etc.)
  const [rightComponent, setRightComponent] = useState<number>(0);

  // Helps to toggle between sidebar of desktop and mobile
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //Sidebar open toggle for mobile
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { isDarkMode } = useTheme();

  // Toggle sidebar open and close for mobile's sidebar
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // To detect phone screen size and toggle between desktop and mobile sidebar
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
    <div className={`dashboard_page_main ${isDarkMode ? "" : "light-mode"}`}>
      {screenWidth > 896 ? (
        <Sidebar
          open={open}
          setOpen={setOpen}
          sidebarMovement={sidebarMovement}
          setSidebarMovement={setSidebarMovement}
          rightComponent={rightComponent}
          setRightComponent={setRightComponent}
        />
      ) : (
        <MobileSidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      )}
      <div className="dashboard_page_right">
        <Navbar handleDrawerToggle={handleDrawerToggle} />

        {rightComponent == 0 ? (
          <Dashboard />
        ) : rightComponent == 1 ? (
          <div>heeelu</div>
        ) : rightComponent == 2 ? (
          <>
            <CreateTest />
          </>
        ) : (
          <List />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
