import React from "react";

export default function ListItem(props) {
  const { item, level } = props;
  console.log("%cInside Listitem", "color: purple", item);
  return (
    <article
    style={{
        backgroundColor: 'pink',
        border: '1px solid',
        padding: '10px',
        margin: '10px',
      }}
    >
      {item.name}
    </article>
  );
}
