import React from "react";

function Item(props) {
  return <li onClick={() => props.onChecked(props.id)}>{props.text}</li>;
}

export default Item;
