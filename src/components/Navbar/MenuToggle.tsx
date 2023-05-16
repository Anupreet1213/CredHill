import { motion } from "framer-motion";
import styled from "styled-components";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

// interface CommonVariants {

// }

interface PathProps {
  d?: string;
  stroke?: string;
  variants: {
    closed: {
      d?: string;
      stroke?: string;
      opacity?: number;
    };
    open: {
      d?: string;
      stroke?: string;
      opacity?: number;
    };
  };
  transition: {
    duration: number;
  };
  animate: string;
  initial: string;
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <Button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 -4 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            closed: {
              d: "M 2 2.5 L 20 2.5",
              stroke: "hsl(0, 100%, 100%)",
            },
            open: {
              d: "M 3 16.5 L 17 2.5",
              stroke: "hsl(0, 100%, 100%)",
            },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke={"hsl(0, 100%, 100%)"}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            closed: {
              d: "M 2 16.346 L 20 16.346",
              stroke: "hsl(0, 100%, 100%)",
            },
            open: {
              d: "M 3 2.5 L 17 16.346",
              stroke: "hsl(0, 100%, 100%)",
            },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}
