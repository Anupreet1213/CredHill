import "./List.css";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

const List = () => {
  return (
    <div className="invoice-list">
      <div className="invoice-list-header">
        <div className="invoice-list-header-left">
          <AddIcon />
          <span>Create Invoice</span>
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <div className="invoice-list-header-right">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default List;
