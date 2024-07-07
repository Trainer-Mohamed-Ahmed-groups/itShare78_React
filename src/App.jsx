import "./App.scss";
import Conditional from "./components/Conditional";
import Course from "./components/Course";
import Details from "./components/Details";
import Gallery from "./views/Gallery";

function App() {
  return (
    <div>
      {/* <Course courseName="HTML" desc="Hyper text markup lang" />
      <Course courseName="React" desc="SPA" />
      <Course courseName="JS">
        <div>This is JS</div>
      </Course>

      <Details />

      <Gallery /> */}
      <Conditional />
    </div>
  );
}

export default App;
