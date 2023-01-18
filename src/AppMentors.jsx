import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((p) => ({
      ...p,
      mentors: p.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 이름을 입력하세요.`);
    const title = prompt(`추가할 멘토의 직업을 입력하세요.`);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
      // mentors: [ { name, title }, ...person.mentors], 코드 순서에 따라 배열의 순서도 달라짐
    }));
  };

  const handleDelete = () => {
    const prev = prompt(`삭제할 멘토의 이름을 입력하세요`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== prev),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는: </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}

const initialPerson = {
  name: "앨리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어 개발자",
    },
  ],
};
