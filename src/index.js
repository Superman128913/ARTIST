import React from "react";
import ReactDOM from "react-dom/client"
import './my-saas.sass'

const Header = () => {
  const mystyle = {
    color : "white",
    backgroundColor:"DogerBlue",
    padding: "10px",
    fontFamily: "Sans-Seif"

  };

  return (
    <>
      <h1 style={mystyle}>Hello Style!</h1>
      <p>A littel style!</p>
    </>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
