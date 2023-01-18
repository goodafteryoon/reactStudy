import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  // 초기값을 설정해주고(initialPerson), setPerson 대신 updatePerson으로 사용한다.
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    // updatePerson((person) => (person.name = '새로운이름!'));
    updatePerson((person) => {
      // 멘도의 이름이 우리가 찾고자하는 그 이름 prev가 맞는지 확인하고나서
      const mentor = person.mentors.find((m) => m.name === prev);
      // 원하는 이름으로 업데이트 해준다.
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    // immer가 내부적으로 중첩객체를 만들어준다.
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      if (index < 0) return;
      person.mentors.splice(index, 1);
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
