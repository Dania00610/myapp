import React, { useState } from "react";
import Form from "./form/form";
import Item from "./item/item";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      title: "nounou",
      description: " hdfjhddj",
      color: "red",
      visible: true,
    },
    {
      id: uuidv4(),
      title: "mimi",
      description: "jdfhskjfhe",
      color: "yellow",
      visible: true,
    },
    {
      id: uuidv4(),
      title: "nounou",
      description: "iuyrhwr",
      color: "pink",
      visible: false,
    },
    { id: uuidv4(), title: "nounou", description: "iuyrhwr", visible: true },
  ]);
  const onAdd = (title, description, color) => {
    const prevData = [...data];
    prevData.push({ id: uuidv4(), title, description, color, visible: true });
    setData(prevData);
  };
  return (
    <div className="container">
      <div className="list">
        {data.map((item) => {
          return item.visible ? (
            <Item
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ) : null;
        })}
      </div>

      <Form onAdd={onAdd} />
    </div>
  );
}

export default App;
