import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../button/button";
import "./modal.css";

export default function ModalReg({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="dialog">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
