import cx from "classnames";
import Link from "next/link";

interface TableRowProps {
  title: string;
  category: "Desktop" | "Mobile";
  amount: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
  image: string;
  tableType: "overview" | "transactions";
}
export default function TableRow(props: TableRowProps) {
  const { title, category, amount, price, status, image, tableType } = props;
  const statusClass = cx({
    "float-start icon-status": true,
    pending: status.toLowerCase() === "pending",
    success: status.toLowerCase() === "success",
    failed: status.toLowerCase() === "failed",
  });
  const action = (
    <td>
      <Link href="/member/transactions/detail">
        <a className="btn btn-status rounded-pill text-sm">Details</a>
      </Link>
    </td>
  );
  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{amount} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      {tableType === "transactions" ? action : <></>}
    </tr>
  );
}
