import About from "./components/About";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navpage from "./components/Navpage";
import Popup from "./components/Popup";
import Signup from "./components/Signup";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Navpage />
      <Header />
      <main>
        <About />
        <Features />
        <Cards />
        <Team />
        <Signup />
        <Footer />
        <Popup />
      </main>
    </div>
  );
}

export default App;
