import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext';
import "./Navbar.css";

interface NavbarProps{
    handleDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({handleDrawerToggle}) => {
    const { isDarkMode } = useTheme();
    return (
        <div
            className={`${isDarkMode ? "" : "light-mode"} dashboard_navbar`}
            onClick={handleDrawerToggle}
        >
            Navbar
        </div>
    )
}

export default Navbar