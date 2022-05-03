import React from "react";

function TodolistItem(props) {
  const title = props.title;
  const deadline = props.deadline;
  return (
    <ul style={{listStyle: "none"}}>
      <li><span style={{fontWeight: "bold"}}>{title}</span> ------ <span style={{fontStyle: "italic"}}>{deadline}</span></li>
    </ul>
  )
}

export default TodolistItem;