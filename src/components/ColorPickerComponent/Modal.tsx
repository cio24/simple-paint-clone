import { Modal } from "react-bootstrap";
import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setDisplayColorPicker } from "../../store/colorPickerSlice";
import { BootstrapModalProps } from "../../models/BootstrapModalModel";

const BootstrapModal: FC<BootstrapModalProps> = ({ title, children }) => {
  //state
  const displayColorPicker = useAppSelector(
    (state) => state.colorPicker.displayColorPicker
  );

  const dispatch = useAppDispatch();

  //handlers
  const handleClose = () => dispatch(setDisplayColorPicker(false));

  //render
  return (
    <>
      <Modal show={displayColorPicker} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BootstrapModal;
