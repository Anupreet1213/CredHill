import "./Create.css";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { PopperProps } from "@mui/material";
import flatpickr from "flatpickr";
import dayjs, { Dayjs } from "dayjs";
import InsightsIcon from "@mui/icons-material/Insights";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { SxProps } from "@mui/material";

const Create = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  // const popperSx: SxProps ={

  // }
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
              <input type="number" min="1"/>
            </div>
            <div className="create-invoice-bill-details-invoice-number">
              <h3>Date Issued</h3>
              <input type="text" min="1" />
            </div>
            <div className="create-invoice-bill-details-invoice-number">
                <h3>Refrence</h3>
                <input type="text" min="1"/>
              </div>
          </div>
        </div>
        <hr/>
        <div className="create-invoice-invoice-to-wrapper">
          <div className="create-invoice-invoice-to">

          </div>
          <div className="create-invoice-user-details create-invoice-invoice-to-right">
            <div className="create-invoice-user-details-brand">
              
            </div>
            <p>Office 149, 450 South Brand Brooklyn</p>
            <p>San Diego County, CA 91905, USA</p>
            <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
          </div>
        </div>
      </div>
      <div className="create-invoice-right">Heelu</div>
    </div>
  );
};

export default Create;
