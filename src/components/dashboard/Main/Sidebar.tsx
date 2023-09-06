import { useRef, Dispatch, SetStateAction, useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InsightsIcon from '@mui/icons-material/Insights';

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

  return (
    <div
      className={open ? "dashboard_sidebar_open" : "dashboard_sidebar_close"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar_header">
        <div className={open ? "drawer_header" : "drawer_header_close"}>
          Invoicer
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

      <div className="sidebar_apps_and_pages">
        <p>APPS AND PAGES</p>
        <div className="apps_and_pages_invoice_wrapper">
          <h3 className="apps_and_pages_invoice_wrapper_calender">Calender</h3>
          <div className="apps_and_pages_invoice_wrapper_heading">
            <h3>Invoice</h3>
            <KeyboardArrowDownIcon onClick={handleClick1} />
          </div>

          <div className={`sidebar_invoice_dropdown ${dropdown ? "open" : ""}`}>
            <ul>
              <li>Create</li>
              <li>List</li>
              <li>Invoice S.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar_profile_settings">
        <p>PROFILE SETTINGS</p>
        <div className="apps_and_pages_invoice_wrapper">
          <h3>View Profile</h3>
          <h3>Edit Profile</h3>
          <h3>Manage Clients</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
