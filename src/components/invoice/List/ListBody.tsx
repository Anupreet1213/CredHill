import image from "./UserAvatar.jpg";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./ListBody.css";
import React from "react";

interface ListBodyProps {
  invoice: {
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
  };
}

const ListBody: React.FC<ListBodyProps> = ({ invoice }) => {
  return (
    <tbody>
      <tr>
        <td className="invoice-list-td-one">
          <span className="invoice-list-td-one-child">
            #{invoice.invoiceNo}
          </span>
        </td>
        <td className="invoice-list-td-two">
          <div className="invoice-list-td-two-child">
            <svg
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              style={{
                fontSize: "20px",
                height: "20px",
                width: "20px",
              }}
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="M10 3.2A9 9 0 1 0 20.8 14a1 1 0 0 0-1-1H13a2 2 0 0 1-2-2V4a.9.9 0 0 0-1-.8"></path>
                <path d="M15 3.5A9 9 0 0 1 20.5 9H16a1 1 0 0 1-1-1V3.5"></path>
              </g>
            </svg>
          </div>
        </td>
        <td className="invoice-list-td-three">
          <div className="invoice-list-td-three-child">
            <img
              src={image}
              alt="user-avatar"
              className="invoice-list-td-three-img"
            />
            <h4>Cute Kanya</h4>
          </div>
        </td>
        <td className="invoice-list-td-four">
          <span className="invoice-list-td-four-child">$3171</span>
        </td>
        <td className="invoice-list-td-five">
          <span className="invoice-list-td-five-child">2023-09-19</span>
        </td>
        <td className="invoice-list-td-six">
          <span className="invoice-list-td-six-child">$205</span>
        </td>
        <td className="invoice-list-td-seven">
          <div className="invoice-list-td-seven-child">
            <DeleteOutlineOutlinedIcon />
            <VisibilityOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ListBody;
