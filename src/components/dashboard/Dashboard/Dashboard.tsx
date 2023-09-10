import lifetime_data_image from "./image 1.png";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import DateRangeSharpIcon from '@mui/icons-material/AttachMoneySharp';
import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import axios from "axios";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [quote, setQuote] = useState("");

    const options = {
        method: "GET",
        url: "https://quotes15.p.rapidapi.com/quotes/random/",
        headers: {
            "X-RapidAPI-Key": "0ef2dc056cmshebff74aae91ff26p17dd9cjsn62c90cd53d63",
            "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                const new_quote = response.data.content;
                setQuote(new_quote);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

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
            enabled: false
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996],
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        }
    });

    const [chartSeries] = useState([
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60],
        },
    ]);

    return (
        <div
            className={`${isDarkMode ? "" : "light-mode"} dashboard_right_second`}
            onClick={toggleTheme}
        >
            <div className="lifetime_data">
                <div className="lifetime_data_content">
                    <p className="lifetime_data_content_heading"> Lifetime Data</p>
                    <div className="lifetime_data_content_grid">
                        <div className="total_invoice">
                            <ReceiptIcon fontSize="large" />
                            <div>
                                <p style={{ color: "#C0C0C0" }}>Total Invoice</p>
                                <p>0</p>
                            </div>
                        </div>
                        <div className="amount_due">
                            <AttachMoneySharpIcon fontSize="large" />
                            <div>
                                <p style={{ color: "#C0C0C0" }}>Amount Due</p>
                                <p>0</p>
                            </div>
                        </div>
                        <div className="invoice_due">
                            <DateRangeSharpIcon fontSize="large" />
                            <div>
                                <p style={{ color: "#C0C0C0" }}>Invoice Due</p>
                                <p>0</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="lifetime_data_image">

                    <img src={lifetime_data_image} alt="" />
                </div>
            </div>

            <div className="dashboard_graph">
                <div className="dashboard_graph_chart">
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
            </div>
            <div className="dashboard_QOD">
                <p className="dashboard_QOD_heading">Quote of the Day</p>
                <p className="dashboard_QOD_quote">{quote}</p>
            </div>
            <div className="dashboard_main_part"></div>
        </div>
    )
}

export default Dashboard;