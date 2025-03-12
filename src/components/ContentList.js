import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ContentList = () => {
  // default state in useState can be an array
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "12 eggs",
    },
    {
      id: 2,
      checked: false,
      item: "10 apples",
    },
    {
      id: 3,
      checked: false,
      item: "2kg flour",
    },
  ]);

  const handleCheck = (id) => {
    // test the onChange handle function
    // alert(`key: ${id}`)

    const listItems = items.map((item) =>
      item.id === id ? 
        { ...item, checked: !item.checked } : 
        item
    );

    setItems(listItems);

    //convey the latest state of listItems on page reload
    // use local storage
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    // alert(`${id}`)
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    //convey the latest state of listItems on page reload
    // use local storage
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="content3">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => {
                  handleCheck(item.id);
                }}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => {
                  handleCheck(item.id);
                }}
              >
                {item.item}
              </label>
              {/* <button>Delete</button> */}
              <FaTrashAlt
                role="button"
                style={{height:16}}
                tabIndex="0"
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the list!</p>
      )}
    </div>
  );
};

export default ContentList;
