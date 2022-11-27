import React from "react";
import Autocomplete from "./Containers/Autocomplete";
import CenterHoc from "./HOCs/CenterHoc";

const appStyle = {
  height: "70vh",
  backgroundColor: "lightblue",
  padding: "15vh",
} as React.CSSProperties;
const colStyle = {
  width: "50vw",
  minWidth:"250px",
  maxWidth:"500px"
} as React.CSSProperties;

function App() {
  return (
    <div style={appStyle}>
      <CenterHoc>
        <div style={colStyle}>
          <Autocomplete></Autocomplete>
        </div>
      </CenterHoc>
    </div>
  );
}

export default App;
