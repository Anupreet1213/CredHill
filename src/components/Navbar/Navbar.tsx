import { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import "./Navbar.css";

const Navbar = () => {
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
    <div className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div>Logo</div>
      <ul className="navRight">
        <li className="navRightChild">Home</li>
        <li className="navRightChild">Features</li>
        <li className="navRightChild">Contact Us</li>
        <li className="navRightChild">About Us</li>
        <HamburgerMenu />
      </ul>
    </div>
  );
};

export default Navbar;
