import "./PrimaryBtn.css";

interface Props {
  title: string;
  type: "primary" | "outline" | "success" | "danger" | "info";
  icon?: string;
  tip?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: any;
}
const PrimaryButton = (props: Props) => {
  return (
    <button className={"btn " + props.type} onClick={props.func}>
      {props.icon && <i className={props.icon}></i>}
      {props.title}
    </button>
  );
};

export default PrimaryButton;
