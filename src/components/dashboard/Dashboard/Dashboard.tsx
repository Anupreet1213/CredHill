import lifetime_data_image from "../assets/images/image1.png";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import DateRangeSharpIcon from '@mui/icons-material/AttachMoneySharp';
import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import axios from "axios";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
    const { isDarkMode } = useTheme();
    const [quote, setQuote] = useState("");

    // const options = {
    //     method: "GET",
    //     url: "https://quotes15.p.rapidapi.com/quotes/random/",
    //     headers: {
    //         "X-RapidAPI-Key": "0ef2dc056cmshebff74aae91ff26p17dd9cjsn62c90cd53d63",
    //         "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    //     },
    // };
    // const options = {
    //     method: 'POST',
    //     url: 'https://pquotes.p.rapidapi.com/api/quote',
    //     headers: {
    //       'content-type': 'application/json',
    //       'X-RapidAPI-Key': '8f37eceeb3mshbb6f8daefc3d4a8p17f595jsn76bdef89f611',
    //       'X-RapidAPI-Host': 'pquotes.p.rapidapi.com'
    //     },
    //     data: {topic: 'motivation'}
    //   };
    const options = {
        method: 'GET',
        url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
        params: {
            token: 'ipworld.info'
        },
        headers: {
            'X-RapidAPI-Key': '8f37eceeb3mshbb6f8daefc3d4a8p17f595jsn76bdef89f611',
            'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                const new_quote = response.data.text;
                // console.log(new_quote);
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
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false
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
        >
            <div className={`${isDarkMode ? "lifetime_data" : "lifetime_data_light"}`}>
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
                                <p style={{ color: "#C0C0C0" }}>Invoice Duee</p>
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

                {/* <p className="dashboard_QOD_quote">cbsdjkasdfchfksdvbcfdvcsdfbckjdcdcbdhckjdscscvc vmcvbfghngfbfgh
                bfnbfdhbfdbfdkgnfdnb  bbg bbvjbvhbfhdbnkfdbjfdghdfjgbgbnbfbngfbhngfjbnvcjbncvbncvnbjbdbjdhgjdbgdnbngdjbnjbj
                gnbjkdnbfnbdbjgjjgkbjndggfhnfbfdjvfbkgj bgb gbgbggbbn gfnbkfnfvdvfdbgfbdgfdsgfdngsdndsfrmjef rjkvgrgt,fgf
                lkermfslef,jgbngkb,nghnghngkgbnmglbfkgbmlbkhbhlkmglmltgblbgmbblm</p> */}
            </div>
            <div className="dashboard_main_part"></div>
        </div>
    )
}

export default Dashboard;