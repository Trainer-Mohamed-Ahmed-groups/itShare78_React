import { useContext, useState } from "react";
import "./App.scss";
import UseEffectComponent from "./components/UseEffectComponent";
import UseMemoExplain from "./components/UseMemoExplain";
import UseCallBackExplain from "./components/UseCallBackExplain";
import SiteNav from "./Layout/SiteNav";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [show, setShow] = useState(true);
  let theme = useContext(ThemeContext);

  return (
    <div className={theme.theme}>
      <SiteNav />
      {/* <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <UseEffectComponent />} */}

      {/* <UseMemoExplain /> */}
      {/* <UseCallBackExplain /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
