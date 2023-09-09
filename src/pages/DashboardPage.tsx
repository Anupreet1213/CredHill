import "./DashboardPage.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Main/Sidebar";
import MobileSidebar from "../components/dashboard/Main/MobileSidebar";
import { useTheme } from "../contexts/ThemeContext";
import lifetime_data_image from "./image 1.png";
import ReceiptIcon from "@mui/icons-material/Receipt";
import axios from 'axios';
import Chart from "react-apexcharts";

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

  const { isDarkMode, toggleTheme } = useTheme();

  // const { quote, loading_quote, error } = UseRandomQuote();



  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "basic-area"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996]
    }
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60]
    }
  ]);






  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    headers: {
      'X-RapidAPI-Key': '0ef2dc056cmshebff74aae91ff26p17dd9cjsn62c90cd53d63',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
         const new_quote = (response.data.content);
        setQuote(new_quote)
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);




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

          <div className="dashboard_graph">

{/* 
                <div className="dashboard_graph_chart">

          <Chart
            // style={{maxHeight:"50%"}}  
            options={chartOptions}
            series={chartSeries}
            type="area"
            width="500"
            />
            </div> */}


          </div>
          <div className="dashboard_QOD">
            <p className="dashboard_QOD_heading">Quote of the Day</p>
                <p className="dashboard_QOD_quote">{quote}</p>
                
          </div>
          <div className="dashboard_main_part"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
