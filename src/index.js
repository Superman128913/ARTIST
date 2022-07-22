import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
  const mystyle = {
    color : "white",
    backgroundColor:"DogerBlue",
    padding: "10px",
    fontFamily: "Sans-Seif"

  };

  return (\
    <>
      <h1 style={mystyle}>Hello Style!</h1>
      <div>
        <p>A littel style!</p>
      </div>
    </>
    );
}