import Header from "./components/header/Header";
import "./App.css";
import Mediaplayer from "./components/mediaplayer/Mediaplayer";
import Discography from "./components/discography/Discography";
import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar.scss";
import Links from "./components/links/Links";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Mediaplayer />
      <Links />
      <Discography />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
