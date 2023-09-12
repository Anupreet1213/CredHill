import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext';
import "./Navbar.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavbarProps{
    handleDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({handleDrawerToggle}) => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div
            className={`${isDarkMode ? "" : "light-mode"} dashboard_navbar`}
            onClick={handleDrawerToggle}
        >
            {
                isDarkMode 
                ?
                <DarkModeIcon onClick={toggleTheme}/>
                :
                <LightModeIcon onClick={toggleTheme}/>
            }
        </div>
    )
}

export default Navbar