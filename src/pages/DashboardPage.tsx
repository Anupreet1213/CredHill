import "./DashboardPage.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Main/Sidebar";
import MobileSidebar from "../components/dashboard/Main/MobileSidebar";
import { useTheme } from "../contexts/ThemeContext";
import lifetime_data_image from "./image 1.png";
import ReceiptIcon from "@mui/icons-material/Receipt";

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
      if (window.innerWidth >= 896) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ---------------------
  // const [open2, setOpen2] = useState<boolean>(true);

  // const handleClick = () => {
  //   setOpen2(!open2);
  // };

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="dashboard_main">
      {screenWidth > 896 ? (
        <Sidebar
          open={open}
          setOpen={setOpen}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <MobileSidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      )}
      <div className="dashboard_right">
        <div
          className={`${isDarkMode ? "" : "light-mode"} dashboard_navbar`}
          onClick={handleDrawerToggle}
        >
          Navbar
        </div>

        <div
          className={`${isDarkMode ? "" : "light-mode"} dashboard_right_second`}
          onClick={toggleTheme}
        >
          <div className="lifetime_data">
            <div className="lifetime_data_content">
              <p> Lifetime Data</p>
              <div className="lifetime_data_content_grid">
                <div className="total_invoice">
                  <ReceiptIcon fontSize="large" />
                  <div>
                    <p>Total Invoice</p>
                    <p>0</p>
                  </div>
                </div>
                <div className="amount_due">
                  <ReceiptIcon fontSize="large" />
                  <div>
                    <p>Total Invoice</p>
                    <p>0</p>
                  </div>
                </div>
                <div className="invoice_due">
                  <ReceiptIcon fontSize="large" />
                  <div>
                    <p>Total Invoice</p>
                    <p>0</p>
                  </div>
                </div>
                {/* <div className="amount_due"></div>
                <div className="invoice_due"></div> */}
              </div>
            </div>

            <div className="lifetime_data_image">
              {/* <p>Hellu</p> */}
              <img src={lifetime_data_image} alt="" />
            </div>
          </div>

          <div className="dashboard_graph"></div>
          <div className="dashboard_QOD"></div>
          <div className="dashboard_main_part"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
