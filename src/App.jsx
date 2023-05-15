import LeftBar from "./components/LeftBar/LeftBar";
import MainBar from "./components/MainBar/MainBar";
import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <LeftBar />
      <MainBar />
    </div>
  );
}

export default App;
