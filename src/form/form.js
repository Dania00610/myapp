import React, { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const showButton =
    title.length > 0 && description.length > 0 && color.length > 0;
  return (
    <div className="form">
      <p>title</p>
      <input
        name="title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <p>description</p>
      <input
        name="title"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <p>color</p>
      <input
        name="title"
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      {showButton && (
        <button
          onClick={() => {
            props.onAdd(title, description, color);
            setTitle("");
            setDescription("");
            setColor("");
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default Form;
