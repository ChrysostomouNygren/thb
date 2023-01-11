import Header from "./components/header/Header";
import "./App.css";
import Mediaplayer from "./components/mediaplayer/Mediaplayer";
import Discography from "./components/discography/Discography";

function App() {
  return (
    <div className="App">
      <Header />
      <Mediaplayer />
      <Discography />
    </div>
  );
}

export default App;
