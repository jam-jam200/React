import React from "react";
import ReactDom from "react-dom";

export default function PortalDemo() {
  return ReactDom.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal")
  );
}
