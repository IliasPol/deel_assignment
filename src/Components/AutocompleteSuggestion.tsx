import React from "react";
interface AutocompletSuggestionProps {
  value: string;
  suggestion: string;
  selected: boolean;
}
const selctedStyle = {
  backgroundColor: "lightgray",
  borderRadius:"10px"
} as React.CSSProperties;
const AutocompleteSuggestion = ({
  value,
  suggestion,
  selected,
}: AutocompletSuggestionProps) => {
  const splitedString: string[] = suggestion.split(value);
  const prefix: string = splitedString[0];
  const suffix: string = splitedString[1];

  return (
    <div style={selected ? selctedStyle : {}}>
      {prefix}
      <span style={{backgroundColor:"yellow" , borderRadius:"2px"}}>{value}</span>
      {suffix}
    </div>
  );
};

export default AutocompleteSuggestion;
