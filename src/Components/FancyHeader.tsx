import React, { useEffect, useState } from "react";

const mainStyle = {
  position: "relative",
  width: "100%",
  height: "100px",
  fontSize: "30px",
  fontStyle: "oblique",
  color: "gray",
  fontFamily: "'Courier New', monospace",
} as React.CSSProperties;

const leftStyle = {
  left: 0,
  position: "absolute",
  fontWeight: "bold",
} as React.CSSProperties;

const rightStyle = {
  right: 5,
  position: "absolute",
  fontWeight: "bold",
} as React.CSSProperties;

const midStyle = {
  left: "50%",
  transform: "translateX(-50%)",
  position: "absolute",
  backgroundColor: "#96305a",
  borderRadius: "10px",
  paddingLeft: "10px",
  paddingRight: "10px",
  color: "whitesmoke",
} as React.CSSProperties;

const FancyHeader = () => {
  const [reverse, setReverse] = useState<boolean>(true);

  const prefix = "I";
  const prefix2 = "me";
  const mid = "complete";
  const suffix = "U";

  useEffect(() => {
    setTimeout(() => {
      setReverse(!reverse);
    }, 5000);
  }, [reverse]);

  return (
    <div style={mainStyle}>
      <span style={reverse ? leftStyle : rightStyle}>
        {reverse ? prefix : prefix2}
      </span>
      <span style={midStyle}>{mid}</span>
      <span style={reverse ? rightStyle : leftStyle}>{suffix}</span>
    </div>
  );
};

export default FancyHeader;
