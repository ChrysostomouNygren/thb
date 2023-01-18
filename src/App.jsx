import Header from "./components/header/Header";
import "./App.css";
import Mediaplayer from "./components/mediaplayer/Mediaplayer";
import Discography from "./components/discography/Discography";
// import Navbar from "./components/navbar/Navbar";
import './components/navbar/Navbar.scss'

function App() {
  const handleClick = (id) => {
    if (id === "links") {
      const element = document.getElementById("links");
    }
    if (id === "discography") {
      const element = document.querySelector('#discography')
      element.scrollIntoView({ behavior: "smooth" });
      console.log('success')
    }
  };
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
      <div className="navbar">
        <h3 onClick={() => handleClick("links")}>Links</h3>
        <h3 onClick={() => handleClick("discography")}>Discography</h3>
      </div>
      <Mediaplayer />
      <Discography/>
    </div>
  );
}

export default App;
