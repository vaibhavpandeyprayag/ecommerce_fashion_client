import { type ReactElement } from "react";
import "./Modal.css";

type Props = {
  showModal: boolean;
  header?: ReactElement;
  body: any;
  footer?: ReactElement;
};

const Modal = ({ showModal, header, body, footer }: Props) => {
  console.log(showModal);
  return (
    <>
      {showModal == true ? (
        <div className="modal-container">
          <div className="modal">
            {header}
            {body}
            {footer}
          </div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Modal;
