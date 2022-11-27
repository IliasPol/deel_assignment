import React from "react";

interface InputProps {
  value: string;
  setValue(v: string): unknown;
  currentSuggestion?: string;
}

const inputStyle = {
  width: "100%",
  height: "30px",
  borderRadius: "10px",
  fontSize: "20px",
  paddingLeft: "10px",
} as React.CSSProperties;
const mainStyle = { minWidth: "100%", fontSize: "20px" } as React.CSSProperties;
const pressEnterStyle = {
  color: "gray",
  paddingLeft: "10px",
  position: "absolute",
  right: 20,
} as React.CSSProperties;

const Input = ({ value, setValue, currentSuggestion }: InputProps) => {
  return (
    <div style={mainStyle}>
      <input
        style={inputStyle}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && currentSuggestion) {
            e.preventDefault();
            setValue(currentSuggestion);
          }
        }}
      ></input>
      {currentSuggestion && <span style={pressEnterStyle}> ...Enter</span>}
    </div>
  );
};

export default Input;
