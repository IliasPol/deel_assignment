import React from "react";

interface CenterHocProps {
  children: React.ReactNode;
}

const outerDivStyle = {
  position: "relative"
} as React.CSSProperties;

const innderDivStyle = {
  display: "inline-block",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
} as React.CSSProperties;

const CenterHoc = ({ children }: CenterHocProps) => {
  return (
    <div style={outerDivStyle}>
      <div style={innderDivStyle}>{children}</div>
    </div>
  );
};

export default CenterHoc;
