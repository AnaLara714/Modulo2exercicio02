import React from "react";
import "./Header.css";

const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <span>{props?.title}</span>
    </header>
  );
};

export default Header;
