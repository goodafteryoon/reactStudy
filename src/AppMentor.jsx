import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "앨리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <span>앨리의 멘토는 {person.mentor.name}</span>
      <span>({person.mentor.title})</span>
      <br />
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name: name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          // setPerson({mentor.title : title});
          setPerson((person) => ({
            ...person,
            // 이때 키와 밸류의 이름이 똑같다면 title: title 을 title로 뭉쳐서 하나로 쓸 수 있음
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
