import { TextField } from "@mui/material";
import { styled } from "@mui/styles";
import "./CreateTest.css";
import InsightsIcon from "@mui/icons-material/Insights";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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

const CreateTest = () => {
  return (
    <div className="invoice_create">
      <div className="invoice_create_child_left">
        <div className="invoice_create_left_first">
          <div className="invoice_create_lf_1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <InsightsIcon
                style={{ marginInlineEnd: "12px", color: "rgb(115, 103, 240)" }}
              />
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "1.375rem",
                  lineHeight: "1.875rem",
                }}
              >
                Invoicer
              </h3>
            </div>
            <p style={{ fontSize: "1rem", lineHeight: "1.7rem" }}>
              Office 149, 450 South Brand Brooklyn San Diego County, CA 91905,
              USA +1 (123) 456 7891, +44 (876) 543 2198
            </p>
          </div>
          <div className="invoice_create_lf_2">
            <div className="invoice_create_lf_2_child1">
              <span
                style={{
                  inlineSize: "6rem",
                  fontSize: "1.375rem",
                  fontWeight: "500",
                  lineHeight: "1.875rem",
                  textTransform: "none",
                  marginInlineEnd: "12px",
                }}
              >
                Invoice
              </span>
              <CustomTextField
                id="outlined-basic"
                variant="outlined"
                disabled
                value={"# 5036"}
              />
            </div>
            <div className="invoice_create_lf_2_child1">
              <span
                style={{
                  inlineSize: "6rem",
                  fontSize: "1.375rem",
                  fontWeight: "500",
                  lineHeight: "1.875rem",
                  textTransform: "none",
                  marginInlineEnd: "12px",
                }}
              >
                Invoice
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{
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
                          color: "white", // Change the text color here
                        },
                        "& .MuiPickersDay-dayWithMargin": {
                          color: "rgb(229,228,226)",
                          // backgroundColor: "rgba(50, 136, 153)",
                        },
                        "& .Mui-selected": {
                          backgroundColor: "#7367F0 !important",
                        },
                        // "& .MuiPickersDay-root:not(.Mui-selected)": {
                        //   border: "1px solid red !important",
                        // },
                      },
                    },
                    // sx: {
                    //   "& .MuiPaper-root": {
                    //     backgroundColor: "yellow",
                    //   },
                    // },
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="invoice_create_child_right"></div>
    </div>
  );
};

export default CreateTest;
