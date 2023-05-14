import React from "react";

export default function Form(props) {
  const { handleSubmit } = props;

  const [newName, setNewName] = React.useState("");
  const [parent, setParent] = React.useState("");

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          name: newName,
          children: [],
          parent: parent || null
        })
      }
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <label htmlFor="parent">Parent</label>
      <input
        type="text"
        value={parent}
        onChange={(e) => setParent(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
