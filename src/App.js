import React from "react";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header backgroundImage="https://www.samford.edu/departments/planetarium/images/milky-way.jpg">
        <h1>Kai Zhang's Homepage</h1>
      </Header>
        <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
