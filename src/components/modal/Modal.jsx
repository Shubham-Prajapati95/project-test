// Modal component
import { useEffect } from "react";
import "./Modal.css";
const Modal = ({ isOpen, onClose, title, children }) => {
  // console.log(isOpen);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listener for key press
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-dialog bg-white mt-[30px] dark:bg-gray-800"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="">
          <div className="flex justify-between">
            <div className="text-[25px] font-bold text-gray-700 dark:text-gray-300">
              {title}
            </div>
            <i
              className="material-icons dark:text-gray-300 cursor-pointer"
              onClick={onClose}
            >
              close
            </i>
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;