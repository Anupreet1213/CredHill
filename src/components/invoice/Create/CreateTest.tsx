import { TextField } from "@mui/material";
import { styled } from "@mui/styles";
import "./CreateTest.css";
// import InsightsIcon from "@mui/icons-material/Insights";
import logo from "./naya.png";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import Select from "react-select";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "../../../contexts/ThemeContext";

interface CreateProps {
  itemDetails: {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    price: number;
    description: string;
  }[];
  setRightComponent: React.Dispatch<React.SetStateAction<number>>;
  setItemDetails: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        cost: number;
        quantity: number;
        price: number;
        description: string;
      }[]
    >
  >;
  invoiceDetails: {
    invoiceNo: string;
    dateIssued: string;
    approvalId: string;
    orderRef: string;
  };
  setInvoiceDetails: React.Dispatch<
    React.SetStateAction<{
      invoiceNo: string;
      dateIssued: string;
      approvalId: string;
      orderRef: string;
    }>
  >;
  newDate: string;
  setNewDate: React.Dispatch<React.SetStateAction<string>>;
}

const CustomTextField = styled(TextField)({
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: "#43475E",
  },
  "& .Mui-disabled input": {
    WebkitTextFillColor: "#646880",
  },
});

const LeftArrowIcon = styled(ArrowBackIosIcon)({
  color: "#7C8199",
  fontSize: "1rem",
});
const RightArrowIcon = styled(ArrowForwardIosIcon)({
  color: "#7C8199",
  fontSize: "1rem",
});
const SwitchViewIcon = styled(KeyboardArrowDownIcon)({
  color: "#7C8199",
});

const CreateTest: React.FC<CreateProps> = ({
  itemDetails,
  setItemDetails,
  setRightComponent,
  invoiceDetails,
  setInvoiceDetails,
  // newDate,
  // setNewDate,
}) => {
  const { isDarkMode } = useTheme();

  const [totalPrice, setTotalPrice] = useState(0);

  const handleItemChange = (index: number, key: string, value: string) => {
    setItemDetails((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], [key]: value };

      if (key === "cost" || key === "quantity") {
        newItems[index].price = newItems[index].cost * newItems[index].quantity;
      }
      const newTotalPrice = newItems.reduce((total, item) => {
        return total + (item.price || 0); // Make sure item.price exists
      }, 0);
  
      // Update the total price state
      setTotalPrice(newTotalPrice);
      return newItems;
    });
    
    // console.log(itemDetails);
  };

  // const [invoiceDetails, setInvoiceDetails] = useState({
  //   invoiceNo: "#001",
  //   dateIssued: "",
  //   approvalId: "",
  //   orderRef: "",
  // });

  // console.log(newdate);

  // const [date,setDate] = useState<Date | null>(null);
  // console.log(date);

  const handleInvoiceDetails = (name: string, value: string) => {
    // const newInvoiceDetails = [...invoiceDetails];
    if (name === "dateIssued") {
      // setNewDate(value);
      const dateStr = new Date(value).toLocaleDateString();
      setInvoiceDetails((prevValues) => ({
        ...prevValues,
        [name]: dateStr,
      }));
    } else {
      setInvoiceDetails((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
    console.log(invoiceDetails);
  };

  // console.log(invoiceDetails);

  const addItem = () => {
    setItemDetails((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length + 1,
        name: "",
        cost: 0,
        quantity: 0,
        price: 0,
        description: "",
      },
    ]);
  };

  const deleteItem = (index: number) => {
    setItemDetails((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const [invoiceToValue, setInvoiceToValue] = useState("");
  const handleInvoiceTo = (e: SelectChangeEvent) => {
    setInvoiceToValue(e.target.value);
    console.log(invoiceToValue);
  };

  // const combinedHandleChange = (event:SelectChangeEvent,index:number, key: string, value: string) => {
  //   handleChange(event);
  //   handleItemChange(index,key,value);

  // };

  const [age, setAge] = useState(["0"]);

  const handleChange = (event: SelectChangeEvent, index: number) => {
    const newAge = [...age];
    newAge[index] = event.target.value;
    setAge(newAge);
  };

  const [billedTo] = useState([
    {
      address:
        "Jonsons and Jonson PLC 7777 Mendez Plains, USA 616865-4180 don85@johnson.com",
      GST: "A093220D932",
      PAN: "APZ120DS0",
    },
    {
      address: "Cipla Limited, Connaught Place, New Delhi don85@johnson.com",
      GST: "B083220D932",
      PAN: "XPZ120DS0",
    },
    {
      address: "Sun Pharma PLC, New York, USA 616865-4180 don85@johnson.com",
      GST: "A0BXV220D932",
      PAN: "92Z120DS0",
    },
  ]);

  return (
    <div className="invoice_create">
      {/* <div className="invoice_create_child_left"> */}
      <div
        className={`${
          isDarkMode
            ? "invoice_create_child_left"
            : "invoice_create_child_left_light"
        }`}
      >
        <div className="invoice_create_left_first">
          <div className="invoice_create_lf_1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              {/* <InsightsIcon
                style={{ marginInlineEnd: "12px", color: "rgb(115, 103, 240)" }}
              /> */}
              <img style={{ width: "130px", marginLeft: "" }} src={logo} />
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "1.375rem",
                  lineHeight: "1.875rem",
                }}
              >
                {/* CredHill */}
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
                  // inlineSize: "6rem",
                  fontSize: "1.375rem",
                  fontWeight: "500",
                  lineHeight: "1.875rem",
                  // textTransform: "none",
                  // marginInlineEnd: "12px",
                }}
              >
                Invoice
              </span>
              <CustomTextField disabled value={invoiceDetails.invoiceNo} />
            </div>
            <div className="invoice_create_lf_2_child1">
              <span
                style={{
                  // inlineSize: "6rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.875rem",
                  // textTransform: "none",
                  // marginInlineEnd: "12px",
                }}
              >
                Date Issued
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // value={invoiceDetails.dateIssued}
                  format="DD/MM/YYYY"
                  // value={newDate}
                  onChange={(newValue) => {
                    handleInvoiceDetails(
                      "dateIssued",
                      newValue?.toString() || ""
                    );
                  }}
                  // value={invoiceDetails.dateIssued}
                  // onChange={
                  //   (e) =>{
                  //     handleInvoice("dateIssued",e)
                  //   }
                  //   }
                  // onChange={handleInvoiceDate}

                  sx={{
                    width: "62%",
                    "& .MuiInputBase-root.MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#7C8199",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7367F0",
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
                          borderColor: "#7367F0 !important",
                          // backgroundColor: "rgba(50, 136, 153)",
                        },
                        "& .Mui-selected": {
                          backgroundColor: "#7367F0 !important",
                        },
                      },
                    },
                  }}
                  slots={{
                    // openPickerIcon: OpenPickerIcon,
                    leftArrowIcon: LeftArrowIcon,
                    rightArrowIcon: RightArrowIcon,
                    switchViewIcon: SwitchViewIcon,
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="invoice_create_lf_2_child1">
              <span
                style={{
                  // inlineSize: "6rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.875rem",
                  // textTransform: "none",
                  // marginInlineEnd: "12px",
                }}
              >
                Approval ID
              </span>
              <TextField
                // name="approvalId"
                value={invoiceDetails.approvalId}
                onChange={(e) => {
                  handleInvoiceDetails("approvalId", e.target.value);
                }}
                sx={{
                  "& .MuiInputBase-root.MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#7C8199",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7367F0",
                    },
                    "& input": {
                      color: "#7C8199",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#7C8199",
                    },
                  },
                }}
              />
            </div>
            <div className="invoice_create_lf_2_child1">
              <span
                style={{
                  // inlineSize: "6rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.875rem",
                  // textTransform: "none",
                  // marginInlineEnd: "12px",
                }}
              >
                Order Reffered By
              </span>
              <TextField
                value={invoiceDetails.orderRef}
                onChange={(e) => {
                  handleInvoiceDetails("orderRef", e.target.value);
                }}
                sx={{
                  "& .MuiInputBase-root.MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#7C8199",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7367F0",
                    },
                    "& input": {
                      color: "#7C8199",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#7C8199",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <hr className="invoice_create_hr1" />
        <div className="invoice_create_left_second">
          <div className="invoice_create_ls_1">
            <h4 className="invoice_create_ls_1_heading">Invoice To:</h4>
            {/* <select className="invoice_create_select_1">
              <option value="create_option">Option 1</option>
              <option value="create_option">Option 2</option>
            </select> */}
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={invoiceToValue}
                onChange={handleInvoiceTo}
                sx={{
                  marginBottom: "20px",
                  width: "100%",
                  borderColor: "rgba(208, 212, 241, 0.68)",
                  color: "rgba(208, 212, 241, 0.68)",
                  "& .MuiSvgIcon-root": {
                    fill: "rgba(208, 212, 241, 0.68)",
                  },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(228, 219, 233, 0.25)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#675CD8",
                    borderWidth: "2px",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(228, 219, 233, 0.45)",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      color: "rgba(208, 212, 241, 0.68)",
                      bgcolor: "#2F3349",
                      "& .MuiMenuItem-root": {
                        padding: 2,
                      },
                    },
                  },
                }}
              >
                <MenuItem value={1}>Jonsons and Jonsons</MenuItem>
                <MenuItem value={2}>Cipla Limited</MenuItem>
                <MenuItem value={3}>Sun Pharma</MenuItem>
              </Select>
            </FormControl>
            {invoiceToValue == "1" ? (
              <>
                <p>GST: {billedTo[0].GST}</p>
                <p>PAN: {billedTo[0].PAN}</p>
              </>
            ) : invoiceToValue == "2" ? (
              <>
                <p>GST: {billedTo[1].GST}</p>
                <p>PAN: {billedTo[1].PAN}</p>
              </>
            ) : invoiceToValue == "3" ? (
              <>
                <p>GST: {billedTo[2].GST}</p>
                <p>PAN: {billedTo[2].PAN}</p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="invoice_create_ls_1">
            <h4 className="invoice_create_ls_1_heading">Client Details</h4>

            {/* <p>{billedTo[0].address}</p> */}
            {invoiceToValue == "1" ? (
              <p>{billedTo[0].address}</p>
            ) : invoiceToValue == "2" ? (
              <p>{billedTo[1].address}</p>
            ) : invoiceToValue == "3" ? (
              <p>{billedTo[2].address}</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <hr className="invoice_create_hr1" />
        <div className="invoice_create_left_third">
          {itemDetails.map((item, index) => (
            <div className="invoice_create_lt_1">
              <div className="invoice_create_lt_child1">
                <div className="invoice_create_lt_child1_gChild">
                  <div className="invoice_create_lt_child1_gChild_1">Item</div>
                  <div className="invoice_create_lt_child1_gChild_2">Rate</div>
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
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={itemDetails[index].name}
                            onChange={(e) => {
                              handleChange(e, index);
                              handleItemChange(index, "name", e.target.value);
                            }}
                            sx={{
                              width: "80%",
                              borderColor: "rgba(208, 212, 241, 0.68)",
                              color: "rgba(208, 212, 241, 0.68)",
                              "& .MuiSvgIcon-root": {
                                fill: "rgba(208, 212, 241, 0.68)",
                              },
                              ".MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(228, 219, 233, 0.25)",
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "#675CD8",
                                  borderWidth: "2px",
                                },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(228, 219, 233, 0.45)",
                              },
                            }}
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  color: "rgba(208, 212, 241, 0.68)",
                                  bgcolor: "#2F3349",
                                  "& .MuiMenuItem-root": {
                                    padding: 2,
                                  },
                                },
                              },
                            }}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div>
                        <label
                          className="invoice_create_label"
                          style={{ display: "block" }}
                        >
                          Description
                        </label>
                        <TextField
                          sx={{
                            "& .MuiInputBase-root.MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#7C8199",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#7367F0",
                              },
                              "& input": {
                                color: "#7C8199",
                              },
                              "& .MuiSvgIcon-root": {
                                color: "#7C8199",
                              },
                            },
                          }}
                          onChange={(e) =>
                            handleItemChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="invoice_create_lt_child2_1_gchild2">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="invoice_create_label">Rate</label>
                        <TextField
                          type="number"
                          onChange={(e) =>
                            handleItemChange(index, "cost", e.target.value)
                          }
                          value={itemDetails[index].cost}
                          sx={{
                            "& .MuiInputBase-root.MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#7C8199",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#7367F0",
                              },
                              "& input": {
                                color: "#7C8199",
                              },
                              "& .MuiSvgIcon-root": {
                                color: "#7C8199",
                              },
                            },
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="invoice_create_label">
                          HSN/SAC
                        </label>
                        <TextField
                          sx={{
                            "& .MuiInputBase-root.MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#7C8199",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#7367F0",
                              },
                              "& input": {
                                color: "#7C8199",
                              },
                              "& .MuiSvgIcon-root": {
                                color: "#7C8199",
                              },
                            },
                          }}
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="invoice_create_lt_child2_1_gchild3">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="invoice_create_label">Qty</label>
                        <TextField
                          type="number"
                          onChange={(e) =>
                            handleItemChange(index, "quantity", e.target.value)
                          }
                          value={itemDetails[index].quantity}
                          sx={{
                            "& .MuiInputBase-root.MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#7C8199",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#7367F0",
                              },
                              "& input": {
                                color: "#7C8199",
                              },
                              "& .MuiSvgIcon-root": {
                                color: "#7C8199",
                              },
                            },
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label className="invoice_create_label">GST(%)</label>
                        <TextField
                          type="number"
                          onChange={(e) =>
                            handleItemChange(index, "quantity", e.target.value)
                          }
                          value={itemDetails[index].quantity}
                          sx={{
                            "& .MuiInputBase-root.MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#7C8199",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#7367F0",
                              },
                              "& input": {
                                color: "#7C8199",
                              },
                              "& .MuiSvgIcon-root": {
                                color: "#7C8199",
                              },
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className="invoice_create_lt_child2_1_gchild4">
                      <p>₹{item.price}</p>
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
        <hr className="invoice_create_hr1" />

        <div className="invoice_create_left_second">
          <div className="invoice_create_ls_1">
            <h4 className="invoice_create_ls_1_heading">Special Note:</h4>
            <TextField
              // name="approvalId"
              // value={invoiceDetails.approvalId}
              // onChange={(e) => {
              //   handleInvoiceDetails("approvalId", e.target.value);
              // }}
              sx={{
                width: "120%",
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#7C8199",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7367F0",
                  },
                  "& input": {
                    color: "#7C8199",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#7C8199",
                  },
                },
              }}
            />
          </div>
          <div className="invoice_create_ls_1_invoice_total">
            <div className="invoice_items_attribute">
              <p>Subtotal:</p>
              {/* <p>Discount:</p> */}
              <p>CGST(9%):</p>
              <p>SGST(9%):</p>
              <p>Total:</p>
            </div>
            <div className="invoice_items_value">
              <p>₹{totalPrice}.0</p>
              {/* <p>₹ 212</p> */}
              <p>₹ {(totalPrice*0.09).toFixed(1)}</p> 
              <p>₹ {(totalPrice*0.09).toFixed(1)}</p> 

              <p>₹{(totalPrice + 2 * (totalPrice * 0.09)).toFixed(1)}</p>

            </div>
            {/* <h4 className="invoice_create_ls_1_heading">Client Details</h4> */}
          </div>
        </div>
      </div>
      <div className="invoice_create_child_right">
        <div className="create_right_1">
          <div className="create_right_1_child">
            <button
              onClick={() => {
                setRightComponent(4);
              }}
              className="create_right_1_button1"
            >
              Preview
            </button>
            <button className="create_right_1_button2">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
