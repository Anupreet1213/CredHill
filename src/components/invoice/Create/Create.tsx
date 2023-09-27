import "./Create.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Create = () => {
  const [age, setAge] = React.useState("0");

  const handleChange = (event: SelectChangeEvent<any>) => {
    setAge(event.target.value);
  };

  const CustomMenuItem = styled(MenuItem)({
    color: "black",
  });
  const CustomTextField = styled(TextField)({
    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: "#43475E",
    },
    "& .Mui-disabled input": {
      WebkitTextFillColor: "#646880",
    },
    // "&.custom-classes": {
    //   height: "100%",
    // },
  });

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

  const CustomSelect = styled(Select)({
    "& input": {
      color: "#72778F",
    },
    "& label": {
      color: "#72778F",
    },
    "& label.Mui-focused": {
      color: "#675DD8",
    },
    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "#B2BAC2",
    // },
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
      "& .MuiSelect-icon": {
        color: "#72778F",
      },
      "& .MuiSelect-select.MuiSelect-select": {
        color: "#72778F !important",
      },
    },
  });

  return (
    <div className="create-invoice">
      <div className="create-invoice-left">
        <div className="create-invoice-details">
          <div className="create-invoice-user-details">
            <div className="create-invoice-user-details-brand">
              <InsightsIcon fontSize="large" style={{ color: "#9DC4FF" }} />
              <h3>Invoicer</h3>
            </div>
            <p>Office 149, 450 South Brand Brooklyn</p>
            <p>San Diego County, CA 91905, USA</p>
            <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
          </div>

          <div className="create-invoice-bill-details">
            <div className="create-invoice-bill-details-invoice-number">
              <p>Invoice</p>
              <CustomTextField
                sx={{
                  width: "200px",
                }}
                id="outlined-basic"
                variant="outlined"
                disabled
                value={"# 5036"}
              />
            </div>
            <div className="create-invoice-bill-details-invoice-number">
              <p>Date Issued</p>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
                    width: "200px",
                    padding: "0",
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#7C8199",
                      },
                      "& input": {
                        color: "#7C8199",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#7C8199",
                      },
                    },
                  }}
                  slotProps={{
                    popper: {
                      sx: {
                        "& .MuiPaper-root": {
                          backgroundColor: "#2F3349",
                          color: "white",
                        },
                        "& .MuiTypography-root": {
                          color: "white",
                        },
                        "& .MuiPickersDay-dayWithMargin": {
                          color: "rgb(229,228,226)",
                        },
                        "& .Mui-selected": {
                          backgroundColor: "#7367F0 !important",
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="create-invoice-bill-details-invoice-number">
              <p>Refrence</p>
              <CssTextField
                sx={{
                  width: "200px",
                }}
                label="Refrence"
                id="custom-css-outlined-input"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="create-invoice-invoice-to-wrapper">
          <div className="create-invoice-invoice-to">
            <FormControl variant="filled" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-filled-label"></InputLabel>
              <CustomSelect
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <CustomMenuItem value={10}>Jordan Peterson</CustomMenuItem>
                <CustomMenuItem value={20}>Shwetabh Gangwar</CustomMenuItem>
                <CustomMenuItem value={30}>Doland Trump</CustomMenuItem>
              </CustomSelect>
            </FormControl>
            <div>
              {age == "10" ? (
                <div className="invoice-to-details">
                  Jordan Stevenson Hall-Robbins PLC 7777 Mendez Plains, USA
                  (616) 865-4180 don85@johnson.com
                </div>
              ) : age == "20" ? (
                <div className="invoice-to-details">
                  Shwetabh Bhaiya Hall-Robbins PLC 7777 Mendez Plains, USA (616)
                  865-4180 don85@johnson.com
                </div>
              ) : age == "30" ? (
                <div className="invoice-to-details">
                  Doland Trump is a stupid guy and Hall-Robbins PLC 7777 Mendez
                  Plains, USA (616) 865-4180 don85@johnson.com
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="create-invoice-user-details create-invoice-invoice-to-right">
            <p>Office 149, 450 South Brand Brooklyn</p>
            <p>San Diego County, CA 91905, USA</p>
            <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
          </div>
        </div>
        <hr />
        <div className="invoice-items-info-wrapper">
          <div>
            <div className="invoice-items-info-container">
              <div>
                <div>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 250 }}>
                    <InputLabel id="demo-simple-select-filled-label"></InputLabel>
                    <CustomSelect
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      // value={age}
                      // onChange={handleChange}
                    >
                      <CustomMenuItem value={10}>
                        Jordan Peterson
                      </CustomMenuItem>
                      <CustomMenuItem value={20}>
                        Shwetabh Gangwar
                      </CustomMenuItem>
                      <CustomMenuItem value={30}>Doland Trump</CustomMenuItem>
                    </CustomSelect>
                  </FormControl>
                </div>
                {/* <div> */}
                <CssTextField
                  label="Description"
                  id="custom-css-outlined-input"
                />
                {/* </div> */}
              </div>
              <div>
                <div>
                  <p>Cost1</p>
                  <input type="number" min="1" />
                </div>
                <div>
                  <p>Cost2</p>
                  <input type="number" min="1" />
                </div>
              </div>
              <div>
                <div>
                  <p>Qty</p>
                  <input type="number" min="1" />
                </div>
              </div>
              <div>
                <div>
                  <p>Costyy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="create-invoice-right">Heelu</div>
    </div>
  );
};

export default Create;
