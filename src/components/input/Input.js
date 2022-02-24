import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [term, setTerm] = useState("");

  const BoxSearch = (event) => {
    setTerm(event.target.value);
  }
  const Search= (event) => {
    event.preventDefault();
    const { callback } = props;
    callback(term);
  }

  const { label } = props;

  return (
    <div>
      <form onSubmit={Search}>
        <label>{label}</label>
        <input
          type="text"
          className="input"
          value={term}
          onChange={BoxSearch}
        />
        <input 
          type="submit"
          className="button"
          value="🔍"
        />
      </form>
    </div>
  );
};

export default Input;
