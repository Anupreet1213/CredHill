import { useRef, Dispatch, SetStateAction, useState } from "react";
import "./Sidebar.css";
import { useTheme } from "../../../contexts/ThemeContext";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InsightsIcon from '@mui/icons-material/Insights';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinearScaleIcon from '@mui/icons-material/LinearScale';

interface DashboardProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<DashboardProps> = ({
    open,
    setOpen,
    loading,
    setLoading,
}) => {
    const svgRef = useRef<SVGPathElement | null>(null);
    let timer: ReturnType<typeof setTimeout> | undefined;

    const handleMouseEnter = (): void => {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            !loading ? setOpen(true) : "";
        }, 100);
    };

    const handleMouseLeave = (): void => {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            !loading ? setOpen(false) : "";
        }, 100);
    };

    const handleClick = (): void => {
        if (svgRef.current && loading) {
            svgRef.current.style.display = "none";
            setLoading(!loading);
        } else if (svgRef.current && !loading) {
            svgRef.current.style.display = "block";
            setLoading(!loading);
        }
    };

    const [dropdown, setdropdown] = useState<boolean>(false);

    const handleClick1 = (): void => {
        setdropdown(!dropdown);
        // console.log(stateVariable);
    };

    const { isDarkMode } = useTheme();

    return (



        <div className={`${open ? "dashboard_sidebar_open" : "dashboard_sidebar_close"} ${isDarkMode ? "" : "light-mode"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <div className={open ? "sidebar_header" : "sidebar_header_close"}>
                <div className={open ? "drawer_header" : "drawer_header_close"}>
                    <InsightsIcon />
                    {open ? <h3>Invoicer</h3> : <></>}
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    role="button"
                    //   tag="i"
                    className={open ? "asideChild1-3" : "asideChild1-3_active"}
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    onClick={handleClick}
                >
                    <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    >
                        <path ref={svgRef} d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
                    </g>
                </svg>
            </div>

            <div className="sidebar_dashboard">
                <div
                    className={
                        open
                            ? "sidebar_dashboard_child_open"
                            : "sidebar_dashboard_child_close"
                    }
                >
                    <HomeIcon />
                    {open ? <h3>Dashboard</h3> : <></>}
                </div>
                <div
                    className={
                        open
                            ? "sidebar_analytics_child_open"
                            : "sidebar_analytics_child_close"
                    }
                >
                    <EqualizerIcon />
                    {open ? <h3>Analytics</h3> : <></>}
                </div>
            </div>
            {/* <div className="sidebar_apps_and_pages"> */}
            <div className={open ? "apps_and_pages_invoice_wrapper" : "apps_and_pages_invoice_wrapper_close"}>
                {
                    open
                        ?
                        <p className="dashboard_heading">APPS AND PAGES</p>
                        :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            key="Apps & Pages"
                            scale="global"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="dashboard_hr_1"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 12v.01M7 12h10m4 0v.01"
                            />
                        </svg>
                }
                <div
                    className={
                        open
                            ? "sidebar_calender_child_open"
                            : "sidebar_calender_child_close"
                    }
                >
                    {/* <KeyboardArrowDownIcon /> */}
                    <HomeIcon />
                    {open ? <h3>Calender</h3> : <></>}
                </div>
                <div
                    className={
                        open
                            ? "sidebar_invoice_child_open"
                            : "sidebar_invoice_child_close"
                    }
                    onClick={handleClick1}
                >
                    <HomeIcon />
                    {open ? <h3>Invoice</h3> : <></>}
                    {dropdown ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                </div>

                <div className={`sidebar_invoice_dropdown ${dropdown ? "open" : ""}`}>
                    <ul>
                        <li className={
                            open
                                ? "sidebar_dashboard_child_open"
                                : "sidebar_dashboard_child_close"
                        }>
                            <FiberManualRecordOutlinedIcon style={{ fontSize: "1rem" }} />
                            {open ? <h3>Create</h3> : <></>}
                        </li>
                        <li className={
                            open
                                ? "sidebar_dashboard_child_open"
                                : "sidebar_dashboard_child_close"
                        }>
                            <FiberManualRecordOutlinedIcon style={{ fontSize: "1rem" }} />
                            {open ? <h3>List</h3> : <></>}
                        </li>
                        <li className={
                            open
                                ? "sidebar_dashboard_child_open"
                                : "sidebar_dashboard_child_close"
                        }>
                            <FiberManualRecordOutlinedIcon style={{ fontSize: "1rem" }} />
                            {open ? <h3>Invoice S.</h3> : <></>}
                        </li>
                    </ul>
                </div>
            </div>

            {/* </div> */}
            {/* <div className="sidebar_profile_settings"> */}
            <div className={open ? "profile_setting_wrapper" : "profile_setting_wrapper_close"}>
                {
                    open
                        ?
                        <p className="dashboard_heading">PROFILE SETTINGS</p>
                        :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            key="Apps & Pages"
                            scale="global"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="dashboard_hr_1"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 12v.01M7 12h10m4 0v.01"
                            />
                        </svg>
                }
                <div
                    className={
                        open
                            ? "sidebar_view_profile_child_open"
                            : "sidebar_view_profile_child_close"
                    }
                >
                    <HomeIcon />
                    {open ? <h3>View Profile</h3> : <></>}
                </div>
                <div
                    className={
                        open
                            ? "sidebar_dashboard_child_open"
                            : "sidebar_dashboard_child_close"
                    }
                >
                    <HomeIcon />
                    {open ? <h3>Edit Profile</h3> : <></>}
                </div>
                <div
                    className={
                        open
                            ? "sidebar_dashboard_child_open"
                            : "sidebar_dashboard_child_close"
                    }
                >
                    <HomeIcon />
                    {open ? <h3>Manage Clients</h3> : <></>}
                </div>
                {/* <h3>View Profile</h3>
                <h3>Edit Profile</h3>
                <h3>Manage Clients</h3> */}
            </div>


            {/* </div> */}

        </div>
    )

};

export default Sidebar;
