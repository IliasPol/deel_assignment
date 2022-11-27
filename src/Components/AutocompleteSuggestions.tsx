import React from "react";
import AutocompleteSuggestion from "./AutocompleteSuggestion";
interface AutocompleteSuggestionProps {
  value: string;
  suggestions: string[];
  selectedIndex?: number;
}

const mainStyle = {
  marginTop: "10px",
  marginLeft: "10px",
  maxHeight: "40vh",
  overflowY: "scroll",
  overflowX: "hidden",
  backgroundColor: "whitesmoke",
  borderRadius: "10px",
} as React.CSSProperties;

const AutocompleteSuggestions = ({
  value,
  suggestions,
  selectedIndex,
}: AutocompleteSuggestionProps) => {
  const padding = suggestions.length > 0 ? "10px" : "0px";
  return (
    <div style={{ ...mainStyle, padding }}>
      {suggestions.map((s, i) => {
        return (
          <AutocompleteSuggestion
            key={i}
            value={value}
            suggestion={s}
            selected={i === selectedIndex}
          ></AutocompleteSuggestion>
        );
      })}
    </div>
  );
};

export default AutocompleteSuggestions;
