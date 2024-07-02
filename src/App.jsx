import reactLogo from "./assets/react.svg";
import "./App.scss";
import Home from "./views/Home";
import TodoList from "./components/Solve";

function App() {
  var myName = "Mohamed Ahmed";

  var person = {
    name: "Omar",
    age: 20,
  };

  return (
    <>
      <img src={reactLogo} alt="" />
      <div className="test">Hello React</div>
      <div>Hello again</div>
      <input type="text" />
      {myName}
      <div>
        {person.name.toUpperCase()}
        {person.age}
      </div>
      <Home />
      <TodoList />
    </>
  );
}

export default App;
