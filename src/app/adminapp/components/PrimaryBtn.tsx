import "./PrimaryBtn.css";

interface Props {
  title: string;
  icon?: string;
  tip?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: any;
}
const PrimaryButton = (props: Props) => {
  return (
    <button className="btn" onClick={props.func}>
      {props.icon && <i className={props.icon}></i>}
      {props.title}
    </button>
  );
};

export default PrimaryButton;
