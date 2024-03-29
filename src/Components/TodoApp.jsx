import React, { useState } from "react";
import Input from "./Input";
import Box from "./Box";

function TodoApp() {
  let [todos, settodos] = useState([]);
  function removetodo(id) {
    console.log(id);
    const newtodo = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(newtodo);
    settodos(newtodo);
  }
  const addtodohandler = (item) => {
    // console.log(item);
    settodos([
      ...todos, //ya hamre old todos hn
      {
        item,
        time: new Date().toLocaleTimeString(), // r yaha hmne r todos ko ad krdea
      },
    ]);
  };

  return (
    <div className="bg-black h-screen p-3">
      <div className="max-w-[750px] min-h-[550px] shadow-xl bg-white m-auto rounded-lg">
        <Input handler={addtodohandler} />
        <Box data={todos} removehandler={removetodo} />
      </div>
    </div>
  );
}

export default TodoApp;
