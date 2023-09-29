import { TextField } from "@mui/material";
import { styled } from "@mui/styles";
import "./CreateTest.css";
import InsightsIcon from "@mui/icons-material/Insights";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import Select from "react-select";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

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
  const [itemDetails, setItemDetails] = useState([
    { id: 1, name: "", cost: 0, quantity: 0, price: 0 },
  ]);

  const handleItemChange = (index: number, key: string, value: string) => {
    setItemDetails((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], [key]: value };

      if (key === "cost" || key === "quantity") {
        newItems[index].price = newItems[index].cost * newItems[index].quantity;
      }
      return newItems;
    });
    console.log(itemDetails);
  };

  const addItem = () => {
    setItemDetails((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, name: "", cost: 0, quantity: 0, price: 0 },
    ]);
  };

  const deleteItem = (index: number) => {
    setItemDetails((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const [billedTo] = useState(
    "Jordan Stevenson Hall-Robbins PLC 7777 Mendez Plains, USA 616865-4180 don85@johnson.com"
  );

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
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <hr className="invoice_create_hr1" />
        <div className="invoice_create_left_second">
          <div className="invoice_create_ls_1">
            <h4 className="invoice_create_ls_1_heading">Invoice To:</h4>
            <select className="invoice_create_select_1">
              <option value="create_option">Option 1</option>
              <option value="create_option">Option 2</option>
            </select>
            <p>{billedTo}</p>
          </div>
          <div className="invoice_create_ls_1">
            <h4 className="invoice_create_ls_1_heading">Invoice To:</h4>
            <select className="invoice_create_select_1">
              <option value="create_option">Option 1</option>
              <option value="create_option">Option 2</option>
            </select>
            <p>{billedTo}</p>
          </div>
        </div>
        <hr className="invoice_create_hr1" />
        <div className="invoice_create_left_third">
          {itemDetails.map((item, index) => (
            <div className="invoice_create_lt_1">
              <div className="invoice_create_lt_child1">
                <div className="invoice_create_lt_child1_gChild">
                  <div className="invoice_create_lt_child1_gChild_1">Item</div>
                  <div className="invoice_create_lt_child1_gChild_2">Cost</div>
                  <div className="invoice_create_lt_child1_gChild_3">Qty</div>
                  <div className="invoice_create_lt_child1_gChild_4">Price</div>
                </div>
              </div>
              <div className="invoice_create_lt_child2">
                <div className="invoice_create_lt_child2_1">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      margin: "-12px",
                    }}
                  >
                    <div className="invoice_create_lt_child2_1_gchild1">
                      <div style={{ marginBottom: "0.75rem" }}>
                        <label className="invoice_create_label">
                          Select Item
                        </label>
                        <select
                          className="invoice_create_select_1"
                          onChange={(e) =>
                            handleItemChange(index, "name", e.target.value)
                          }
                        >
                          <option value="Option1">Option 1</option>
                          <option value="Option2">Option 2</option>
                          <option value="Option3">Option 3</option>
                          <option value="Option4">Option 4</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="invoice_create_label"
                          style={{ display: "block" }}
                        >
                          Description
                        </label>
                        <TextField />
                      </div>
                    </div>
                    <div className="invoice_create_lt_child2_1_gchild2">
                      <div>
                        <label className="invoice_create_label">Cost</label>
                        <TextField
                          type="number"
                          onChange={(e) =>
                            handleItemChange(index, "cost", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <label className="invoice_create_label">Discount</label>
                        <TextField type="number" />
                      </div>
                    </div>
                    <div className="invoice_create_lt_child2_1_gchild3">
                      <div>
                        <label className="invoice_create_label">Qty</label>
                        <TextField
                          type="number"
                          onChange={(e) =>
                            handleItemChange(index, "quantity", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="invoice_create_lt_child2_1_gchild4">
                      <p>${item.price}</p>
                    </div>
                  </div>
                </div>
                <div className="invoice_create_lt_child2_2">
                  <CloseIcon onClick={() => deleteItem(index)} />
                </div>
              </div>
            </div>
          ))}
          <div className="invoice_create_lt_child3" onClick={addItem}>
            Add Item
          </div>
        </div>
      </div>
      <div
        className="invoice_create_child_right"
        style={{ marginBottom: "1.5rem" }}
      ></div>
    </div>
  );
};

export default CreateTest;
