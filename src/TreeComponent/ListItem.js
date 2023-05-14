import React from "react";

export default function ListItem(props) {
  const { item, level, handleClick, recursiveRemove } = props;
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
      <button onClick={(e) => handleClick(e, {
            name: item.parent + Math.floor(Math.random() * 100),
            children: [],
            parent: item.name || null,

          })}>Click</button>
      <button onClick={() => recursiveRemove(item.name)}>Remove</button>
      <h5>Name: {item.name}</h5>
      <h5>Parent: {item.parent}</h5>
      <h5>Level: {level}</h5>
    </article>
  );
}
