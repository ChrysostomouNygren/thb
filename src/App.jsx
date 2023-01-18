import Header from "./components/header/Header";
import "./App.css";
import Mediaplayer from "./components/mediaplayer/Mediaplayer";
import Discography from "./components/discography/Discography";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Mediaplayer />
      <Discography />
    </div>
  );
}

export default App;
