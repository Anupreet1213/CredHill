import "./Preview.css";
import InsightsIcon from "@mui/icons-material/Insights";
import PreviewEachItem from "./PreviewEachItem";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";

interface PreviewProps {
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
}

const Preview: React.FC<PreviewProps> = ({ itemDetails, invoiceDetails }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const user = useSelector((state: RootState) => state.user);

  const addInvoice = async () => {
    try {
      const userId = (user as { uid: string }).uid;
      const invoicesDocRef = doc(database, "invoices", userId);

      // Fetch the existing document
      const invoicesDoc = await getDoc(invoicesDocRef);

      // Check if the document exists
      if (invoicesDoc.exists()) {
        // If the document exists, update the invoices array
        const existingInvoices = invoicesDoc.data()?.invoices || [];
        const nextInvoiceNo = existingInvoices.length + 1;
        const updatedInvoices = [
          ...existingInvoices,
          {
            invoiceNo: nextInvoiceNo,
            invoiceDetails,
            itemDetails,
          },
        ];

        // Update the document with the new invoices array
        await setDoc(invoicesDocRef, { invoices: updatedInvoices });
      } else {
        // If the document doesn't exist, create a new one
        await setDoc(invoicesDocRef, {
          invoices: [
            {
              invoiceNo: 1,
              invoiceDetails,
              itemDetails,
            },
          ],
        });
      }

      console.log("Invoice added successfully!");
    } catch (error) {
      console.error("Error adding invoice:", error);
    }
  };

  return (
    <div className="preview-main">
      <div className="preview_left">
        <div className="preview_left_child" ref={componentRef}>
          <div className="preview_left_child_1">
            <div className="preview_left_child_1_1">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <InsightsIcon
                  style={{
                    marginInlineEnd: "12px",
                    color: "rgb(115, 103, 240)",
                  }}
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
            <div className="preview_left_child_1_2">
              <h6 className="preview_left_child_1_2_1">
                Invoice {invoiceDetails.invoiceNo}
              </h6>
              <p
                style={{
                  marginTop: "12px",
                  marginBottom: "12px",
                  marginBlockEnd: "1rem",
                }}
              >
                <span>Date Issued: </span>
                <span style={{ fontWeight: "500" }}>
                  {invoiceDetails.dateIssued}
                </span>
              </p>
              <p
                style={{
                  // marginTop: "12px",
                  // marginBottom: "12px",
                  marginBlockEnd: "1rem",
                }}
              >
                <span>Approval Id: </span>
                <span style={{ fontWeight: "500" }}>
                  {invoiceDetails.approvalId}
                </span>
              </p>
              <p
                style={{
                  // marginTop: "12px",
                  // marginBottom: "12px",
                  marginBlockEnd: "1rem",
                }}
              >
                <span>Offer Referred By: </span>
                <span style={{ fontWeight: "500" }}>
                  {invoiceDetails.orderRef}
                </span>
              </p>
            </div>
          </div>
          <hr className="preview_hr" />
          <div className="preview_left_child_2">
            <div className="preview_left_child_2_1">
              <h6 className="preview_left_child_2_1_heading">Invoice To:</h6>
              <p style={{ marginBottom: "4px" }}>
                Andrew Burns Richardson and Sons LLC 78083 Laura Pines, Bhutan
                (687) 660-2473 pwillis@cross.org
              </p>
            </div>
            <div className="preview_left_child_2_1">
              <h6 className="preview_left_child_2_1_heading">Invoice To:</h6>
              <p style={{ marginBottom: "4px" }}>
                Andrew Burns Richardson and Sons LLC 78083 Laura Pines, Bhutan
                (687) 660-2473 pwillis@cross.org
              </p>
            </div>
          </div>
          <hr className="preview_hr" />
          <div className="preview_left_child_3">
            <table style={{ width: "100%", borderSpacing: "0" }}>
              <thead>
                <tr className="preview_left_thead">
                  <th className="preview_th_tr1">ITEM</th>
                  <th className="preview_th_tr2">DESCRIPTION</th>
                  <th className="preview_th_tr3">COST</th>
                  <th className="preview_th_tr4">QUANTITY</th>
                  <th className="preview_th_tr5">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {itemDetails.map((value) => {
                  return <PreviewEachItem value={value} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="preview_right">
        <button onClick={handlePrint}>Khatka</button>
        <button onClick={addInvoice}>Save</button>
      </div>
    </div>
  );
};

export default Preview;
