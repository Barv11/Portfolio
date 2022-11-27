// import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Profile from "../Components/Profile/Profile";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Technologies from "../Components/Technologies/Technologies";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Projects />
      <Technologies />
      {/* <About /> */}
      <Contact />
    </div>
  );
}

export default App;
