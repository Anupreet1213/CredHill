import * as React from "react";
import { Select, SelectProps, SelectRootSlotProps } from "@mui/base/Select";
import { Option, optionClasses } from "@mui/base/Option";
import { Popper } from "@mui/base/Popper";
import { styled } from "@mui/system";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import "./CustomSelectComp.css";

interface customSelectComponentProp {
  setSelection: React.Dispatch<React.SetStateAction<string>>;
}

const CustomSelectComp: React.FC<customSelectComponentProp> = ({ setSelection }) => {
  const [selectValue, setSelectValue] = React.useState<string>("");

  const handleClick = (value: string) => {
    setSelectValue(value);
    setSelection(value);
  };

  React.useEffect(() => {
    console.log(selectValue);
  }, [selectValue]);
  return (
    <CustomSelect defaultValue={10}>
      <StyledOption value={10} onClick={() => handleClick("M")}>
        MS Dhoni
      </StyledOption>
      <StyledOption value={20} onClick={() => handleClick("S")}>
        Shwetabh Bhaiya
      </StyledOption>
      <StyledOption value={30} onClick={() => handleClick("D")}>
        Doland Biden
      </StyledOption>
    </CustomSelect>
  );
}

const CustomSelect = React.forwardRef(function CustomSelect<
  TValue extends object | number,
  Multiple extends boolean
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} ref={ref} slots={slots} />;
});

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const mainColor = "#2F3349";
const secondColor = "#333265";

const Button = React.forwardRef(function Button<
  TValue extends object,
  Multiple extends boolean
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ...other } = props;
  return (
    <button id="button" type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </button>
  );
});

const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 14rem;
  padding: 8px 12px;
  border-radius: 4px;
  text-align: left;
  line-height: 1.5;
  background: "#fff";
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  background-color: ${mainColor};
  height: 3.5rem;
  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
    color: #72778F;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 14rem;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background-color: ${mainColor};
  
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  `
);

const StyledOption = styled(Option)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 6px;
  cursor: default;
  color: white;
  font-weight: 500
  background-color: ${mainColor};

  &:last-of-type {
    border-bottom: none;
  }

  &:hover:not(.${optionClasses.disabled}) {
    background: ${secondColor};
    color: #7367F0;
    cursor: pointer;
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;
export default CustomSelectComp;