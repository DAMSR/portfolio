import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
};

export default App;
