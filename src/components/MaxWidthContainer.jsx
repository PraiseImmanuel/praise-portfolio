import "../styles/MaxWidthContainer.css";
import React from "react";

const MaxWidthContainer = ({ children }) => {
    return <div className="max-width-container">{children}</div>;
};

export default MaxWidthContainer;
