import "./RoundButton.css";

interface Props {
  title: string;
  type: "primary" | "outline" | "success" | "danger";
  icon?: string;
  tip?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: any;
  children?: any;
}
const RoundButton = (props: Props) => {
  return (
    <button className={"round-btn " + props.type} onClick={props.func}>
      {props.children}
    </button>
  );
};

export default RoundButton;
