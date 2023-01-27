import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  /* 업데이트가 되었다면 업데이트된 그 item으로부터 update된 todo를 받아 올것이고
  setTodos안에서 map으로 todos를 빙글빙글 돌다가 그 투두 t의 id가 우리가 업데이트 하려는 upadate된 id 와 동일하다면 updated로 매핑
  아니라면 그냥 t로 둔다. 
  */
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // id가 delete 할 id가 아닌 것만 모아서 setTodos를 해준 것
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelelt={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

// 콜백함수를 addTodo에 prop으로 전달해주면 됨
// onAdd가 되면 나한테 콜백함수를 호출해
