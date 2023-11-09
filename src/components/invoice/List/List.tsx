import "./List.css";
// import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { Select } from "@mui/material";
import CustomSelectComp from "./CustomSelectComp";
// import InputBase from "@mui/material/InputBase";
import MovingIcon from "@mui/icons-material/Moving";
import ListBody from "./ListBody";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import React from "react";

interface ListProps{
  invoiceArray: {
        invoiceNo: number;
        itemDetails: {
          id: number;
          name: string;
          cost: number;
          quantity: number;
          price: number;
          description: string;
        }[];
        invoiceDetails: {
          invoiceNo: string;
          dateIssued: string;
          approvalId: string;
          orderRef: string;
        };
      }[],
      setInvoiceArray: React.Dispatch<React.SetStateAction<{
        invoiceNo: number;
        itemDetails: {
          id: number;
          name: string;
          cost: number;
          quantity: number;
          price: number;
          description: string;
        }[];
        invoiceDetails: {
          invoiceNo: string;
          dateIssued: string;
          approvalId: string;
          orderRef: string;
        };
      }[]>>
}

const List:React.FC<ListProps> = ({invoiceArray,setInvoiceArray}) => {
  // const [age, setAge] = useState<number | "">("");

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setAge(event.target.value as number | "");
  // };

  const CssTextField = styled(TextField)({
    "& input": {
      color: "#72778F",
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

  const user = useSelector((state: RootState) => state.user);


  // Invoice Schema for firebase: 

  // const [invoiceArray, setInvoiceArray] = useState<
  //   {
  //     invoiceNo: number;
  //     itemDetails: {
  //       id: number;
  //       name: string;
  //       cost: number;
  //       quantity: number;
  //       price: number;
  //       description: string;
  //     }[];
  //     invoiceDetails: {
  //       invoiceNo: string;
  //       dateIssued: string;
  //       approvalId: string;
  //       orderRef: string;
  //     };
  //   }[]
  // >([]);

  const getInvoices = async () => {
    try {
      const userId = (user as { uid: string }).uid;
      const invoicesDocRef = doc(database, "invoices", userId);

      const invoicesDoc = await getDoc(invoicesDocRef);

      if (invoicesDoc.exists()) {
        const fetchedInvoices = invoicesDoc.data()?.invoices || [];
        setInvoiceArray(fetchedInvoices);
      } else {
        console.log("No invoices found for the user.");
      }
    } catch (error) {
      console.error("Error getting invoices:", error);
    }
  };

  console.log("idhar: ", invoiceArray);

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
                    <MovingIcon />
                  </div>
                </th>
                <th className="invoice-list-main-th-three">
                  <div className="invoice-list-main-th-three-child">
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
                <th className="invoice-list-main-th-four">
                  <div className="invoice-list-main-th-four-child">
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
                <th className="invoice-list-main-th-five">
                  <div className="invoice-list-main-th-five-child">
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
                <th className="invoice-list-main-th-six">
                  <div className="invoice-list-main-th-six-child">
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
                <th className="invoice-list-main-th-seven">
                  <div className="invoice-list-main-th-seven-child">
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
            {invoiceArray.map((invoice, index) => {
              return <ListBody key={index} invoice={invoice} />;
            })}
            <button onClick={getInvoices}>Khatka</button>
          </table>
        </div>
      </div>
      <div className="invoice-list-footer">
        <p>Showing 1 to 10 of 50 entries</p>
        <Stack spacing={2}>
          <Pagination
            count={10}
            // variant="outlined"
            shape="rounded"
            className="pagination-custom-style"
          />
        </Stack>
      </div>
    </div>
  );
};

export default List;
