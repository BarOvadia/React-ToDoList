import React, { useState } from "react";

function Item(props) {
  const [line, setLine] = useState("none");

  function clicked() {
    if (line === "line-through") {
      setLine("none");
    } else {
      setLine("line-through");
    }
  }

  return (
    <li onClick={clicked} style={{ textDecoration: line }}>
      {props.text}
    </li>
  );
}

export default Item;
