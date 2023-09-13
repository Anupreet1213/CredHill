import React,{useRef,useState} from 'react'
import { useTheme } from '../../../contexts/ThemeContext';
import "./Navbar.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import clickSound from './switch-on.mp3'
import clickSound2 from './switch-off.mp3'

interface NavbarProps{
    handleDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({handleDrawerToggle}) => {
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
    return (
        <div
            className={`${isDarkMode ? "" : "light-mode"} dashboard_navbar`}
            onClick={() => {
                handleDrawerToggle();
                toggleSound();
                playClickSound();
            }}
            
        >
              <audio ref={audioRef} src={clickSound}></audio>
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