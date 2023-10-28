import React from "react";

const Header = ({ title }) => {
  return (
    <div
      style={{
        width: "auto",
        backgroundColor: "aliceblue",
        alignContent: "center",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
