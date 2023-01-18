import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault(); // preventDefault()를 하지 않으면 리렌더링됨
    console.log(form);
  };

  const handleChange = (e) => {
    // 인풋에 변경이 발생하게 되면, target에 있는 이름과 target에 있는 밸류를  e.target에서 받아온다
    const { name, value } = e.target;
    // 기존에 form에 있는 데이터는 그대로 유지하고, 현재 input이 변경되고 있는 이름의 키에 지금 전달받은 value를 덮어 씌워준다.
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
