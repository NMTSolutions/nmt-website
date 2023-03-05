import React from "react";
import Button from "../Button/Button";

import "./dialog.css";

export interface DialogProps {
  open: boolean;
  heading?: React.ReactNode;
  content?: React.ReactNode;
  action?: string;
  actions?: React.ReactNode;
  type?: "info" | "warning" | "error";
  onAction?: () => void;
  onClose?: () => void;
  onCancel?: () => void;
}

const Dialog = ({
  open = false,
  heading = "Info",
  content = "Are you sure?",
  actions,
  action = "Yes",
  type = "info",
  onAction,
  onClose,
  onCancel,
}: DialogProps) => {
  const handleBackdropClick = () => {
    onClose?.();
  };

  const handleCancelClick = () => {
    onCancel?.();
  };

  const onActionClick = () => {
    onAction?.();
  };

  return (
    <>
      <div
        className={`backdrop ${open ? "visible" : "invisible"}`}
        onClick={handleBackdropClick}
      ></div>
      <div className={`dialog ${open ? "visible" : "invisible"}`}>
        <div className="dialog-header">
          <h3>{heading}</h3>
        </div>
        <div className="dialog-content">{content}</div>
        <div className={`dialog-actions ${type}`}>
          <Button variant="text" label="Cancel" onClick={handleCancelClick} />
          <Button
            variant="primary"
            label={action}
            onClick={onActionClick}
            color={
              type === "warning"
                ? "orange"
                : type === "error"
                ? "red"
                : undefined
            }
          />
        </div>
      </div>
    </>
  );
};

export default Dialog;
