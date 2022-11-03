import "./App.css";
import Header from "./components/Header";
import InformationBar from "./components/InformationBar";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="relative container px-10">
        <NavBar />
        <Profile />
        <InformationBar />
      </div>
    </div>
  );
}

export default App;
