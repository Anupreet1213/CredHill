import { styled } from "@mui/material/styles";
import { useRef, Dispatch, SetStateAction } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./Sidebar.css";

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1, 0, 3),
    backgroundColor: "#2F3349",
    color: "white",
    ...theme.mixins.toolbar,
}));

interface DashboardProps {
    setDashContent: Dispatch<SetStateAction<number>>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<DashboardProps> = ({ setDashContent, open, setOpen, loading, setLoading }) => {

    const svgRef = useRef<SVGPathElement | null>(null);

    const handleMouseEnter = (): void => {
        // setSidebarOpen(true);
        !loading ? setOpen(true) : "";
        // dashContentRef.current.style.width = "80vw";
    };

    const handleMouseLeave = (): void => {
        // setSidebarOpen(false);
        !loading ? setOpen(false) : "";
        // dashContentRef.current.style.width = "90vw";
        // setOpen(false);
    };

    const handleClick = (): void => {
        if (svgRef.current && loading) {
            svgRef.current.style.display = "none";
            // if (dashContentRef.current) {
            //     dashContentRef.current.style.width = "90vw";
            // }
            // if (dashContentRef2.current) {
            //     dashContentRef2.current.style.width = "90vw";
            // }
            // setOpen(!open);
            setLoading(!loading);
        } else if (svgRef.current && !loading) {
            svgRef.current.style.display = "block";
            // if (dashContentRef.current) {
            //     dashContentRef.current.style.width = "80vw";
            // }
            // if (dashContentRef2.current) {
            //     dashContentRef2.current.style.width = "80vw";
            // }
            // setOpen(!open);
            setLoading(!loading);
        }


    };
    return (
        // <Drawer
        //     variant="permanent"
        //     open={open}
        //     onMouseEnter={handleMouseEnter}
        //     onMouseLeave={handleMouseLeave}
        //     className="dashboard_drawer"
        // // className={`testMainChild ${sidebarOpen ? "sidebarOpen" : ""}`}
        // >
        //     <DrawerHeader>
        //         <div className={open ? "drawer_header" : "drawer_header_close"}>INVOICER</div>
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             xmlnsXlink="http://www.w3.org/1999/xlink"
        //             role="button"
        //             //   tag="i"
        //             className={open ? "asideChild1-3" : "asideChild1-3_active"}
        //             width="1em"
        //             height="1em"
        //             viewBox="0 0 24 24"
        //             onClick={handleClick}
        //         >
        //             <g
        //                 fill="none"
        //                 stroke="currentColor"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //                 strokeWidth="1.5"
        //             >
        //                 <path ref={svgRef} d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path>
        //                 <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
        //             </g>
        //         </svg>
        //         {/* <IconButton onClick={handleDrawerClose}>
        //     {theme.direction === "rtl" ? (
        //       <ChevronRightIcon />
        //     ) : (
        //       <ChevronLeftIcon />
        //     )}
        //   </IconButton> */}
        //     </DrawerHeader>
        //     <Divider />
        //     <List className="dash_sidebar_text">
        //         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        //             <ListItem key={text} disablePadding sx={{ display: "block" }} className="sidebar_cell">
        //                 <ListItemButton
        //                     sx={{
        //                         minHeight: 48,
        //                         justifyContent: open ? "initial" : "center",
        //                         px: 2.5,
        //                     }}
        //                     onClick={() => (index === 0 ? setDashContent(0) : index === 1 ? setDashContent(1) : setDashContent(2))}
        //                 >
        //                     <ListItemIcon
        //                         sx={{
        //                             minWidth: 0,
        //                             mr: open ? 3 : "auto",
        //                             justifyContent: "center",
        //                             color: "rgb(255, 255, 255)",
        //                         }}
        //                     >
        //                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //                     </ListItemIcon>
        //                     <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        //                 </ListItemButton>
        //             </ListItem>
        //         ))}
        //     </List>
        //     <Divider />
        //     <List>
        //         {["All mail", "Trash", "Spam"].map((text, index) => (
        //             <ListItem key={text} disablePadding sx={{ display: "block" }}>
        //                 <ListItemButton
        //                     sx={{
        //                         minHeight: 48,
        //                         justifyContent: open ? "initial" : "center",
        //                         px: 2.5,
        //                     }}
        //                 >
        //                     <ListItemIcon
        //                         sx={{
        //                             minWidth: 0,
        //                             mr: open ? 3 : "auto",
        //                             justifyContent: "center",
        //                         }}
        //                     >
        //                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //                     </ListItemIcon>
        //                     <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        //                 </ListItemButton>
        //             </ListItem>
        //         ))}
        //     </List>
        // </Drawer>
        <div className={open ? "dashboard_sidebar_open" : "dashboard_sidebar_close"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* <div className="sidebar_header">
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
            </div> */}
            <DrawerHeader>
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
                {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
            </DrawerHeader>

            <List className="dash_sidebar_text">
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
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
            </List>
        </div>
    )
}

export default Sidebar;