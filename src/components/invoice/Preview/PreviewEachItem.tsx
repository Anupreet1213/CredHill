import "./PreviewEachItem.css";

interface PreviewEachItem {
  value: {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    price: number;
    description: string;
  };
}

const PreviewEachItem: React.FC<PreviewEachItem> = ({ value }) => {
  return (
    <tr>
      <td className="preview_tb_td_1">{value.name}</td>
      <td className="preview_tb_td_1">{value.description} H</td>
      <td className="preview_tb_td_1">{value.cost}</td>
      <td className="preview_tb_td_1">{value.quantity}</td>
      <td className="preview_tb_td_1">{value.price}</td>
    </tr>
  );
};

export default PreviewEachItem;
