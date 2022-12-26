import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  Global,
  NavbarStyled as Navbar,
  FooterStyled as Footer,
} from "./global.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

const App = () => (
  <BrowserRouter>
    <main>
      <Global />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projetos" exact component={Projects} />
        <Route path="/sobre" exact component={About} />
        <Route path="/contato" exact component={Contact} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
