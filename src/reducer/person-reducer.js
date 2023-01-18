// 기존의 person 객체를 받아오고 이 person을 가지고 뭘 하길 원할 건지 액션을 받아온다.
export default function personReducer(person, action) {
  // 어떤 액션이냐에 따라서 원하는 것을 해줄텐데,액션의 타입(action.type)별로 원하는 것을 해준다.
  // eslint-disable-next-line default-case
  switch (action.type) {
    // 전달받은 person 이라는 기존의 객체를 업뎃인지 삭제인지 추가인지 이러한 action에 따라서 새로운 person의 객체를 만들어서 리턴해주는 함수를 만드는 것이다.
    case "updated": {
      const { prev, current } = action;
      // const prev = action.prev;
      // const current = action.current; 위의 코드와 똑같다. object deconstructing을 이용해서 액션에 있는 prev, current 값을 각각 가져온 것
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }

    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }

    case "deleted": {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }

    default: {
      throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
    }
  }
}
