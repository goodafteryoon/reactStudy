import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };

  return (
    <li>
      {/* 단 input에 id를 주고 label에도 htmlFor를 줘서 두 개가 연결돼있음을 명시해준다. */}
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button>
        <FaTrashAlt />
      </button>
    </li>
  );
}
