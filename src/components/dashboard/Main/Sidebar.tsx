import { useRef, Dispatch, SetStateAction, useState } from "react";
import "./Sidebar.css";
import { useTheme } from "../../../contexts/ThemeContext";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import Person2Icon from "@mui/icons-material/Person2";
import logo from "./naya.png";

interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  sidebarMovement: boolean;
  setSidebarMovement: Dispatch<SetStateAction<boolean>>;
  rightComponent: number;
  setRightComponent: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  open,
  setOpen,
  sidebarMovement,
  setSidebarMovement,
  rightComponent,
  setRightComponent,
}) => {
  const svgRef = useRef<SVGPathElement | null>(null);
  let timer: ReturnType<typeof setTimeout> | undefined;

  const handleMouseEnter = (): void => {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      !sidebarMovement ? setOpen(true) : "";
    }, 100);
  };

  const handleMouseLeave = (): void => {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      !sidebarMovement ? setOpen(false) : "";
    }, 100);
  };

  const handleClick = (): void => {
    if (svgRef.current && sidebarMovement) {
      svgRef.current.style.display = "none";
      setSidebarMovement(!sidebarMovement);
    } else if (svgRef.current && !sidebarMovement) {
      svgRef.current.style.display = "block";
      setSidebarMovement(!sidebarMovement);
    }
  };

  const [dropdown, setdropdown] = useState<boolean>(false);

  const handleClick1 = (): void => {
    setdropdown(!dropdown);
    // console.log(stateVariable);
  };

  const handleRightComponent = (): void => {
    setRightComponent(0);
  };
  const handleRightComponent2 = (): void => {
    setRightComponent(1);
  };
  const handleRightComponent3 = (): void => {
    setRightComponent(2);
  };
  const handleRightComponent4 = (): void => {
    setRightComponent(3);
  };
  const handleRightComponent5 = (): void => {
    setRightComponent(4);
  };

  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        open ? "dashboard_sidebar_open" : "dashboard_sidebar_close"
      } ${isDarkMode ? "" : "light-mode"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={open ? "sidebar_header" : "sidebar_header_close"}>
        <div className={open ? "drawer_header" : "drawer_header_close"}>
          {/* <InsightsIcon /> */}
          {open ? (
            <img style={{ width: "120px", marginLeft: "" }} src={logo} />
          ) : (
            <></>
          )}
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

      <div className={open ? "sidebar_dashboard" : "sidebar_dashboard_close"}>
        <div
          className={
            open
              ? rightComponent == 0
                ? "sidebar_dashboard_child_open_selected"
                : "sidebar_dashboard_child_open"
              : "sidebar_dashboard_child_close"
          }
          onClick={handleRightComponent}
        >
          <HomeIcon fontSize={open ? "medium" : "medium"} />
          {open ? <span>Dashboard</span> : <></>}
        </div>
        <div
          className={
            open
              ? rightComponent == 1
                ? "sidebar_analytics_child_open_selected"
                : "sidebar_analytics_child_open"
              : "sidebar_analytics_child_close"
          }
          onClick={handleRightComponent2}
        >
          <EqualizerIcon fontSize={open ? "medium" : "medium"} />
          {open ? <span>Analytics</span> : <></>}
        </div>
      </div>
      {/* <div className="sidebar_apps_and_pages"> */}
      <div
        className={
          open
            ? "apps_and_pages_invoice_wrapper"
            : "apps_and_pages_invoice_wrapper_close"
        }
      >
        {open ? (
          <p className="dashboard_heading">APPS AND PAGES</p>
        ) : (
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
        )}
        <div
          className={
            open
              ? "sidebar_calender_child_open"
              : "sidebar_calender_child_close"
          }
        >
          {/* <KeyboardArrowDownIcon /> */}
          <CalendarMonthIcon fontSize={open ? "medium" : "medium"} />
          {open ? <span>Calender</span> : <></>}
        </div>
        <div
          className={
            open ? "sidebar_invoice_child_open" : "sidebar_invoice_child_close"
          }
          onClick={handleClick1}
        >
          <DescriptionIcon
            className="sidebar_invoice_child_1"
            fontSize={open ? "medium" : "medium"}
          />
          {open ? (
            <span className="sidebar_invoice_child_2">Invoice</span>
          ) : (
            <></>
          )}
          {open ? (
            dropdown ? (
              <KeyboardArrowDownIcon className="sidebar_invoice_child_3" />
            ) : (
              <KeyboardArrowRightIcon className="sidebar_invoice_child_3" />
            )
          ) : null}
        </div>

        {open ? (
          <div className={`sidebar_invoice_dropdown ${dropdown ? "open" : ""}`}>
            <ul>
              <li
                className={
                  open
                    ? "sidebar_dashboard_child_open"
                    : "sidebar_dashboard_child_close"
                }
                onClick={handleRightComponent3}
              >
                <FiberManualRecordOutlinedIcon style={{ fontSize: "1rem" }} />
                {open ? <span>Create</span> : <></>}
              </li>
              <li
                className={
                  open
                    ? rightComponent == 3
                      ? "sidebar_list_child_open_selected"
                      : "sidebar_list_child_open"
                    : "sidebar_list_child_close"
                }
                onClick={handleRightComponent4}
              >
                <FiberManualRecordOutlinedIcon style={{ fontSize: "1rem" }} />
                {open ? <span>List</span> : <></>}
              </li>
              <li
                className={
                  open
                    ? "sidebar_dashboard_child_open"
                    : "sidebar_dashboard_child_close"
                }
                onClick={handleRightComponent5}
              >
                <FiberManualRecordOutlinedIcon style={{ fontSize: "1rem" }} />
                {open ? <span>Preview</span> : <></>}
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* </div> */}
      {/* <div className="sidebar_profile_settings"> */}
      <div
        className={
          open ? "profile_setting_wrapper" : "profile_setting_wrapper_close"
        }
      >
        {open ? (
          <p className="dashboard_heading">PROFILE SETTINGS</p>
        ) : (
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
        )}
        <div
          className={
            open
              ? "sidebar_view_profile_child_open"
              : "sidebar_view_profile_child_close"
          }
        >
          <Person2Icon fontSize={open ? "medium" : "medium"} />
          {open ? <span>View Profile</span> : <></>}
        </div>
        <div
          className={
            open
              ? "sidebar_dashboard_child_open"
              : "sidebar_dashboard_child_close"
          }
        >
          <HomeIcon fontSize={open ? "medium" : "medium"} />
          {open ? <span>Edit Profile</span> : <></>}
        </div>
        <div
          className={
            open
              ? "sidebar_dashboard_child_open"
              : "sidebar_dashboard_child_close"
          }
        >
          <HomeIcon fontSize={open ? "medium" : "medium"} />
          {open ? <span>Manage Clients</span> : <></>}
        </div>
        {/* <h3>View Profile</h3>
                <h3>Edit Profile</h3>
                <h3>Manage Clients</h3> */}
      </div>

      {/* </div> */}
    </div>
  );
};

export default Sidebar;
