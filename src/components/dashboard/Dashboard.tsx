import "./MiniDrawer.css";
import { useState, useRef } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MuiAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#2F3248",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: "#2F3349",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#2F3349",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  backgroundColor: "#2F3349",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
 
const Dashboard = ({dashContentRef}) => {
  const svgRef = useRef<SVGPathElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // const theme = useTheme();
  const [open, setOpen] = useState(true);

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
    if (svgRef.current !== null && loading) {
      svgRef.current.style.display = "none";
      dashContentRef.current.style.width = "90vw";
      setLoading(!loading);
    } else if (svgRef.current !== null && !loading) {
      svgRef.current.style.display = "block";
      dashContentRef.current.style.width = "80vw";
      setLoading(!loading);
    }
  };


  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap component="div">
            {
              loading ? "Mini variant drawer" : "Invoicer"
            }
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="dashboard_drawer"
        // className={`testMainChild ${sidebarOpen ? "sidebarOpen" : ""}`}
      >
        <DrawerHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            role="button"
            //   tag="i"
            className="asideChild1-3"
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
        <Divider />
        <List className="dash_sidebar_text">
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
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
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Dashboard;