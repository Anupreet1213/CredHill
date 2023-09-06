import { useRef, Dispatch, SetStateAction } from "react";
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useTheme } from "../../../contexts/ThemeContext";

interface DashboardProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<DashboardProps> = ({ open, setOpen, loading, setLoading }) => {

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


    const {isDarkMode} = useTheme();

    return (

        <div className={`${open ? "dashboard_sidebar_open" : "dashboard_sidebar_close"} ${isDarkMode ? "" : "light-mode"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <div className="sidebar_header">
                <div className={open ? "drawer_header" : "drawer_header_close"}>INVOICER</div>
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
                <div className={open ? "sidebar_dashboard_child_open" : "sidebar_dashboard_child_close"}>
                    <HomeIcon />
                    {
                        open
                            ?
                            <h3>Dashboard</h3>
                            :
                            <></>
                    }
                </div>
                <div className={open ? "sidebar_analytics_child_open" : "sidebar_analytics_child_close"}>
                    <EqualizerIcon />
                    {
                        open
                            ?
                            <h3>Analytics</h3>
                            :
                            <></>
                    }
                </div>
            </div>
            {/* <List className="dash_sidebar_text">
                {["Inbox", "Starred", "Send", "Drafts"].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: "block" }} className="sidebar_cell">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                            onClick={() => (index === 0 ? setDashContent(0) : index === 1 ? setDashContent(1) : setDashContent(2))}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                    color: "rgb(255, 255, 255)",
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </div>
    )
}

export default Sidebar;