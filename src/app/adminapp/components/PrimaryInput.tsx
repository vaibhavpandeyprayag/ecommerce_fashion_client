interface Props {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  style?: unknown;
}

const PrimaryInput = (props: Props) => {
  return (
    <input
      id={props.id ? props.id : ""}
      name={props.name ? props.name : ""}
      className="form-input w-100"
      style={props.style ? props.style : {}}
      type={props.type ? props.type : ""}
      placeholder={props.placeholder ? props.placeholder : "Enter here"}
    />
  );
};

export default PrimaryInput;
