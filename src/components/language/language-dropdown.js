import React from "react";
import "../language/language.css";

const LanguageOption = (props) => {
  return (
    <div className="topnav-right" style={{}}>
      <select
        onChange={props.onChange}
        id="language"
        style={{ fontFamily: "Titillium Web, sans-serif" }}
      >
        <option value={"sw"}>Svenska</option>
        <option value={"en"}>English</option>
      </select>
    </div>
  );
};

export default LanguageOption;
