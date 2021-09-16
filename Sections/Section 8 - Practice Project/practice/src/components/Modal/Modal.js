import "./Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {props.title}
        </div>
        <div className="modal-body">
          <p>{props.content}</p>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
