import { HamburgerMenu } from "./HamburgerMenu";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
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
