import React, { useEffect, useState } from "react";
import autoComplete from "../asyncCalls/autoComplete";
import AutocompleteSuggestions from "../Components/AutocompleteSuggestions";
import FancyHeader from "../Components/FancyHeader";
import Input from "../Components/Input";

const Autocomplete = () => {
  const [value, setValue] = useState<string>("");
  const [matchingWords, setMatchingWords] = useState<string[]>([]);
  const [matchingWordsLength, setMatchingWordsLength] = useState<number>(0);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    if (value !== "") {
      autoComplete(value).then((result) => {
        setMatchingWords(result);
        setMatchingWordsLength(result.length);
        setSelectedIndex(0);
      });
    } else {
      setMatchingWords([]);
      setMatchingWordsLength(0);
      setSelectedIndex(0);
    }
  }, [value]);

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "ArrowUp") {
          if (selectedIndex === 0) setSelectedIndex(matchingWordsLength - 1);
          else setSelectedIndex((selectedIndex - 1) % matchingWordsLength);
        }
        if (e.key === "ArrowDown")
          setSelectedIndex((selectedIndex + 1) % matchingWordsLength);
      }}
    >
      <FancyHeader></FancyHeader>
      <Input
        value={value}
        setValue={setValue}
        currentSuggestion={matchingWords[selectedIndex]}
      ></Input>
      <AutocompleteSuggestions
        value={value}
        suggestions={matchingWords}
        selectedIndex={selectedIndex}
      ></AutocompleteSuggestions>
    </div>
  );
};

export default Autocomplete;
