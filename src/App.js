import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import FooterLinks from "./components/footer";
import semver from 'semver';
import { engines } from './package';

const version = engines.node;
if (!semver.satisfies(process.version, version)) {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`);
  process.exit(1);
}



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

