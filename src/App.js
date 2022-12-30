import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Global, FooterStyled as Footer } from "./global.css";
import { About, Contact, Home, NotFound, Projects } from "./pages";

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
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
