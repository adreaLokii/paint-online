import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import Settings from "./components/Settings";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="app">
      <Toolbar></Toolbar>
      <Settings></Settings>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
