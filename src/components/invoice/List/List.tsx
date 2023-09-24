import "./List.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import image from "./UserAvatar.jpg";
import { Select } from "@mui/material";
import CustomSelectComp from "./CustomSelectComp";
// import InputBase from "@mui/material/InputBase";

const List = () => {
  const [age, setAge] = useState<number | "">("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as number | "");
  };

  const CssTextField = styled(TextField)({
    "& input": {
      color: "#72778F",
      //   height: "1rem",
    },
    "& label": {
      color: "#72778F",
    },
    "& label.Mui-focused": {
      color: "#675DD8",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#72778F",
      },
      "&:hover fieldset": {
        borderColor: "#675DD8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#675DD8",
      },
    },
  });

  // const CustomSelect = styled(TextField)({
  //   "& input": {
  //     color: "#72778F",
  //   },
  //   "& label": {
  //     color: "#72778F",
  //   },
  //   "& label.Mui-focused": {
  //     color: "#675DD8",
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "#72778F",
  //     },
  //     "&:hover fieldset": {
  //       borderColor: "#675DD8",
  //     },
  //     "&.Mui-focused fieldset": {
  //       borderColor: "#675DD8",
  //     },
  //     "& .MuiSelect-icon": {
  //       color: "#72778F",
  //     },
  //     "& .MuiSelect-select.MuiSelect-select": {
  //       color: "#72778F !important",
  //     },
  //   },
  // });

  const CustomMenuItem = styled(MenuItem)({
    color: "blue",
    // backgroundColor: "red",
    backgroundColor: "red", // Replace with the color you want
  });

  return (
    <div className="invoice-list">
      <div className="invoice-list-header">
        <div className="invoice-list-header-left">
          <AddIcon />
          <span>Create Invoice</span>
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <div className="invoice-list-header-right">
          {/* <TextField
            id="outlined-basic"
            label="Outlined warning"
            variant="outlined"
            color="warning"
          /> */}
          <CssTextField label="Search Invoice" id="custom-css-outlined-input" />
          <CustomSelectComp />
        </div>
      </div>
      <hr className="invoice-list-hr-first" />
      <div className="invoice-list-main">
        <div style={{ overflow: "auto" }}>
          <table>
            <thead>
              <tr>
                <th className="invoice-list-main-th-one">
                  <div className="invoice-list-main-th-one-child">
                    <span>#ID</span>
                    <span style={{ opacity: "0" }}>HE</span>
                  </div>
                </th>
                <th className="invoice-list-main-th-two">
                  <div className="invoice-list-main-th-two-child">
                    <span>Client</span>
                    <span
                      style={{
                        opacity: "0",
                        blockSize: "1em",
                        inlineSize: "1em",
                        // width: "22vw",
                      }}
                    >
                      HE
                    </span>
                  </div>
                </th>
                <th className="invoice-list-main-th-three">
                  <div className="invoice-list-main-th-three-child">
                    <span>Total</span>
                    <span
                      style={{
                        opacity: "0",
                        // width: "3vw",
                      }}
                    >
                      HE
                    </span>
                  </div>
                </th>
                <th className="invoice-list-main-th-four">
                  <div className="invoice-list-main-th-four-child">
                    <span>Issued Date</span>
                    <span
                      style={{
                        opacity: "0",
                        // width: "5vw",
                      }}
                    >
                      HE
                    </span>
                  </div>
                </th>
                <th className="invoice-list-main-th-five">
                  <div className="invoice-list-main-th-five-child">
                    <span>Balance</span>
                    <span
                      style={{
                        opacity: "0",
                        // width: "3vw",
                      }}
                    >
                      HE
                    </span>
                  </div>
                </th>
                <th className="invoice-list-main-th-six">
                  <div className="invoice-list-main-th-six-child">
                    <span>Actions</span>
                    <span
                      style={{
                        opacity: "0",
                        // width: "5vw",
                      }}
                    >
                      HE
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="invoice-list-td-one">
                  <span className="invoice-list-td-one-child">#5036</span>
                </td>
                <td className="invoice-list-td-two">
                  <div className="invoice-list-td-two-child">
                    <img
                      src={image}
                      alt="user-avatar"
                      className="invoice-list-td-two-img"
                    />
                    <h4>Cute Kanya</h4>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
