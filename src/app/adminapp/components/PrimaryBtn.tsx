import "./PrimaryBtn.css";

interface Props {
  title: string;
  icon?: string;
  tip?: string;
  func: (...args: unknown[]) => unknown;
}
const PrimaryButton = (props: Props) => {
  return (
    <button className="btn">
      {props.icon && <i className={props.icon}></i>}
      {props.title}
    </button>
  );
};

export default PrimaryButton;
