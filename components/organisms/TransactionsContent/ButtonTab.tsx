import cx from "classnames";
interface ButtonTabProps {
  title: string;
  active?: boolean;
  filter: string;
}
export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, filter } = props;
  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <a data-filter={filter} href="#" className={btnClass}>
      {title}
    </a>
  );
}
