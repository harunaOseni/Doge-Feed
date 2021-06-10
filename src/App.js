import "./App.css";
import { Header, Sidebar, Feed } from "./components";
import "./components/Header/Header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed /> 
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
