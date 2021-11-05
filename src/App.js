import About from "./About";
import "./App.css";

import Footer from "./Footer";
import Home from "./Home";
import Blogs from "./Blogs";
import Creative from "./Creative";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Blogs />
       <Creative />
       <Footer />
    </div>
  );
}

export default App;
