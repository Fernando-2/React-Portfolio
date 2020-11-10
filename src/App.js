import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import FooterLinks from "./components/footer";




function App() {

  return (
    <Router>
      <div>
        <NavTabs />
        <div className="container-fluid aboutBox">
          <section className="container-sm w-100 p-3 aboutSection">
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </section>
        </div>
        <FooterLinks />
      </div>
    </Router>
  );
}

export default App;

