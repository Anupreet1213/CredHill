import "./Create.css";
import InsightsIcon from "@mui/icons-material/Insights";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Create = () => {
  return (
    <div className="create-invoice">
      <div className="create-invoice-left">
        <div className="create-invoice-details">
          <div className="create-invoice-user-details">
            <div className="create-invoice-user-details-brand">
              <InsightsIcon fontSize="large" />
              <h3>Invoicer</h3>
            </div>
            <p>Office 149, 450 South Brand Brooklyn</p>
            <p>San Diego County, CA 91905, USA</p>
            <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
          </div>
          <div className="create-invoice-bill-details">
            <div className="create-invoice-bill-details-invoice-number">
              <h2>Invoice</h2>
              <input type="number" min="1"></input>
            </div>
            <div>
              {/* <h3>Date Issued</h3> */}
              {/* <DatePicker
                label="Controlled picker"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="create-invoice-right">Heelu</div>
    </div>
  );
};

export default Create;
