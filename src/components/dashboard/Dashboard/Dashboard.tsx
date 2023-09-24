import lifetime_data_image from "../assets/images/image1.png";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import Chart from "react-apexcharts";
import React, { useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
// import axios from "axios";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  //Import the theme prop and destructured it
  const { isDarkMode } = useTheme();

  // State updating quote everyday through Rapid API
  // const [quote, setQuote] = useState("");

  // const options = {
  //   method: "GET",
  //   url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
  //   params: {
  //     token: "ipworld.info",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "8f37eceeb3mshbb6f8daefc3d4a8p17f595jsn76bdef89f611",
  //     "X-RapidAPI-Host":
  //       "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
  //   },
  // };

  //UseEffect is used to fetch data from RAPID API when the browser loads
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       const new_quote = response.data.text;
  //       setQuote(new_quote);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //Apex Chart Configurations :
  const [chartOptions] = useState({
    chart: {
      id: "basic-area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },

    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  });

  //Chart Data :
  const [chartSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60],
    },
  ]);

  return (
    <div className={`${isDarkMode ? "" : "light-mode"} dashboard_right_second`}>
      <div
        className={`${isDarkMode ? "lifetime_data" : "lifetime_data_light"}`}
      >
        {/* <div className={"test"}> */}
        <div className="test2">
          <div className="test3">
            <div className="test4">
              <h5 className="test5">Website Analytics</h5>
              <p className="test6">Total 28.5% Conversion Rate</p>
            </div>

            <div className="test7">
              <div className="test8">
                <div className="test9">
                  {/* <p className="test10">Spending</p> */}
                </div>
                <div className="test11">
                  <span className="test12">12h</span>
                  <span>Spend</span>
                </div>
                <div className="test11">
                  <span className="test12">12h</span>
                  <span>Spend</span>
                </div>
                <div className="test11">
                  <span className="test12">12h</span>
                  <span>Spend</span>
                </div>
                <div className="test11">
                  <span className="test12">12h</span>
                  <span>Spend</span>
                </div>
              </div>
            </div>

            <div className="test13">
              <img src={lifetime_data_image} alt="" className="test14" />
            </div>

            {/* <div className="lifetime_data_image">
                <img src={lifetime_data_image} alt="" />
              </div> */}
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="dashboard_graph">
        <div className="dashboard_graph_chart_heading">
          <AttachMoneySharpIcon fontSize="large" />
          <div>
            <p>97.5k</p>
            <p>Revenue Generated</p>
          </div>
        </div>
        <div>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="dashboard_QOD">
        <p className="dashboard_QOD_heading">Quote of the Day</p>
        {/* <p className="dashboard_QOD_quote">{quote}</p> */}
      </div>
      <div className="dashboard_main_part"></div>
    </div>
  );
};

export default Dashboard;
