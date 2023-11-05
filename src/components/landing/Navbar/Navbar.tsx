import { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./naya.png";
// import firebase from "firebase/compat/app";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
      <div>
        <img style={{ width: "120px", marginLeft: "" }} src={logo} />
      </div>
      <ul className="navRight">
        <li className="navRightChild">Home</li>
        <li className="navRightChild">Features</li>
        <li className="navRightChild">Contact Us</li>
        <li className="navRightChild">
          <Link
            to={user ? "/dashboard" : "/login"}
            className="navRightChildLink"
          >
            Dashboard
          </Link>
        </li>
        <HamburgerMenu />
      </ul>
    </div>
  );
};

export default Navbar;
