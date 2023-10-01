import "./Preview.css";
import InsightsIcon from "@mui/icons-material/Insights";
import PreviewEachItem from "./PreviewEachItem";

interface PreviewProps {
  itemDetails: {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    price: number;
    description: string;
  }[];
}

const Preview: React.FC<PreviewProps> = ({ itemDetails }) => {
  return (
    <div className="preview-main">
      <div className="preview_left">
        <div className="preview_left_child">
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
              <h6 className="preview_left_child_1_2_1">Invoice #5036</h6>
              <p
                style={{
                  marginTop: "12px",
                  marginBottom: "12px",
                  marginBlockEnd: "1rem",
                }}
              >
                <span>Date Issued: </span>
                <span style={{ fontWeight: "500" }}>2023-09-19</span>
              </p>
              <p
                style={{
                  // marginTop: "12px",
                  // marginBottom: "12px",
                  marginBlockEnd: "1rem",
                }}
              >
                <span>Due Date: </span>
                <span style={{ fontWeight: "500" }}>2023-09-25</span>
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
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
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
      <div className="preview_right"></div>
    </div>
  );
};

export default Preview;