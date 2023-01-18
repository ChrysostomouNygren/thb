import Header from "./components/header/Header";
import "./App.css";
import Mediaplayer from "./components/mediaplayer/Mediaplayer";
import Discography from "./components/discography/Discography";
// import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.scss";
import Links from "./components/links/Links";

function App() {
  const handleClick = (id) => {
    if (id === "links") {
      const element = document.querySelector("#links");
      element.scrollIntoView({ behavior: "smooth" });
      console.log("success to links");
    }
    if (id === "discography") {
      const element = document.querySelector("#discography");
      element.scrollIntoView({ behavior: "smooth" });
      console.log("success to discography");
    }
    if (id === "contact") {
      const element = document.querySelector("#contact");
      element.scrollIntoView({ behavior: "smooth" });
      console.log("success to contact");
    }
  };
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
      <div className="navbar">
        <div className="navbar-center">
          <h3 onClick={() => handleClick("links")}>Links</h3>
          <h3 onClick={() => handleClick("discography")}>Discography</h3>
          <h3 onClick={() => handleClick("contact")}>Contact</h3>
        </div>
      </div>
      <Mediaplayer />
      <Links />
      <Discography />
    </div>
  );
}

export default App;
