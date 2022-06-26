import React from "react";
import "./item.css";
function Item(props) {
  return (
    <div className="item  " style={{ backgroundColor: props.color }}>
      <div>
        <h5 className="title">{props.title}</h5>
        <p className="description">{props.description}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}
Item.defaultProps = {
  color: "green",
};
export default Item;
