import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "윤나";
  const fruits = ["딸기", "바나나", "요거트", "사과"];

  return (
    <>
      <h1>Hello!</h1>
      <p>{name}</p>
      {fruits.map((item) => (
        <li>{item}</li>
      ))}
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://images.unsplash.com/photo-1672674467617-04d5427981ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
      />
    </>
  );
}

export default AppJSX;
