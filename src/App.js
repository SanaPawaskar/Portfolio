import Navbar from "./components/Navbar";
 import Intro from "./components/Intro";
 import Services from "./components/Services";
import "./App.css";
 import Experience from "./components/Experience";
 import Portfolio from "./components/Portfolio";
 import Contact from "./components/Contact";
 import Footer from "./components/Footer";
// import { useContext } from "react";
// import { themeContext } from "./Context";
function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      // style={{
      //   background: darkMode ? "black" : "",
      //   color: darkMode ? "white" : "",
      // }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
