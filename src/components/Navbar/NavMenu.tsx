import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavMenuContainer = styled.div`
  /* width: 100%; */
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: #0a1644;
`;

const NavList = styled.ul`
  /* padding: 12em 0.8em; */
  /* width: 100%; */
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: #555;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

interface NavMenuProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export function NavMenu({ setOpen, isOpen }: NavMenuProps) {
  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <Link
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              color: "white",
            }}
            to={"projects"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => {
              setOpen(false);
            }}
          >
            Projects
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <Link
            style={{ color: "white" }}
            to={"experience"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => {
              setOpen(false);
            }}
          >
            Achievements
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            style={{ color: "white" }}
            to="techStackNav"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => {
              setOpen(false);
            }}
          >
            Skills
          </Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,

              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <Link
            style={{ color: "white" }}
            to={"contactMe"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => {
              setOpen(false);
            }}
          >
            Socials
          </Link>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}
