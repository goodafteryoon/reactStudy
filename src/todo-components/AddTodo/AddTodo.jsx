import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleText = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // 공백 없애기
    // if (text.trim() === "") {
    //   return;
    // }
    if (text.trim().length === 0) {
      return;
    }
    // 고유한 id값 넣기
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleText}
      />
      <button>Add</button>
    </form>
  );
}
