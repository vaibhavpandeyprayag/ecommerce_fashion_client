import type { FormEvent } from "react";
import "./PrimaryInput.css";

interface Props {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  style?: unknown;
  value: string;
  onInput: (event: FormEvent<HTMLInputElement>) => void;
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
      value={props.value}
      onInput={props.onInput}
    />
  );
};

export default PrimaryInput;
