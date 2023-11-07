import React, { useRef, useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import "./Navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import clickSound from "./switch-on.mp3";
import clickSound2 from "./switch-off.mp3";
import image from "./../../invoice/List/UserAvatar.jpg";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/userActions";
import firebase from "firebase/compat/app";
import { RootState } from "../../../redux/types";

interface NavbarProps {
  handleDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSound, setCurrentSound] = useState<number>(1);
  const audioSources = [clickSound, clickSound2];
  const toggleSound = () => {
    setCurrentSound(currentSound === 1 ? 2 : 1);
  };
  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.src = audioSources[currentSound - 1];
      audioRef.current.play();
    }
  };

  const dispatch = useDispatch();

  const handleLogout = async () => {
    await firebase.auth().signOut();
    dispatch(logout());
  };

  const user = useSelector((state: RootState) => state.user);

  const userUrl = (user as { photoURL: string }).photoURL;

  return (
    <div
      className={`${isDarkMode ? "" : "light-mode"} dashboard_navbar`}
      onClick={() => {
        handleDrawerToggle();
      }}
    >
      <audio ref={audioRef} src={clickSound}></audio>
      <img
        src={userUrl ? userUrl : image}
        alt="user_avatar"
        className="navbar_user_avatar"
      />
      <button onClick={handleLogout}>Log Out</button>
      {isDarkMode ? (
        <DarkModeIcon
          onClick={() => {
            toggleTheme();
            toggleSound();
            playClickSound();
          }}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <LightModeIcon
          onClick={() => {
            toggleTheme();
            toggleSound();
            playClickSound();
          }}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default Navbar;
