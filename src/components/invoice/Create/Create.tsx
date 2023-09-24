import "./Create.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InsightsIcon from "@mui/icons-material/Insights";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { PopperProps } from "@mui/material";
// import flatpickr from "flatpickr";
// import dayjs, { Dayjs } from "dayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { SxProps } from "@mui/material";

const Create = () => {
  const [age, setAge] = React.useState("0");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
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
              <h2>Invoice</h2>
              <input type="number" min="1" />
            </div>
            <div className="create-invoice-bill-details-invoice-number">
              <h3>Date Issued</h3>
              <input type="text" min="1" />
            </div>
            <div className="create-invoice-bill-details-invoice-number">
              <h3>Refrence</h3>
              <input type="text" min="1" />
            </div>
          </div>
        </div>
        <hr />
        <div className="create-invoice-invoice-to-wrapper">
          <div className="create-invoice-invoice-to">
            <FormControl variant="filled" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-filled-label"></InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Jordan Peterson</MenuItem>
                <MenuItem value={20}>Shwetabh Gangwar</MenuItem>
                <MenuItem value={30}>Doland Trump</MenuItem>
              </Select>
            </FormControl>
            <div>
              {age == "10" ? (
                <div className="invoice-to-details" >
                  Jordan Stevenson Hall-Robbins PLC 7777 Mendez Plains, USA
                  (616) 865-4180 don85@johnson.com
                </div>
              ) : age == "20" ? (
                <div className="invoice-to-details">
                Shwetabh Bhaiya Hall-Robbins PLC 7777 Mendez Plains, USA
                (616) 865-4180 don85@johnson.com
              </div>
              ) : age == "30" ? (
                <div className="invoice-to-details">
                Doland Trump is a stupid guy and Hall-Robbins PLC 7777 Mendez Plains, USA
                (616) 865-4180 don85@johnson.com
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


        
      </div>
      <div className="create-invoice-right">Heelu</div>
    </div>
  );
};

export default Create;
