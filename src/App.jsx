// import { useState } from "react";
import Counter from "./Counter";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(["Jeans", "Jackets", "Shirts", "Caps"]);
  // const items = ["Jeans", "Jackets", "Shirts", "Caps"];
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const addItemClickHandler = () => {
    setItems([...items, input]);
    setInput("");
  };
  return (
    <>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter your name"
        value={input} //this value is the main thing
      />
      <button onClick={addItemClickHandler}>Add Item</button>
      {items.map((item, index, arr) => {
        return <Counter itemName={item} />;
      })}
      {/* <Counter itemName="Jeans" />
      <Counter itemName="Jackets" />
      <Counter itemName="Shirts" /> */}
    </>
  );
};

export default App;
