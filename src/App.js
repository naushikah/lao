import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Global, NavbarStyled as Navbar, FooterStyled as FooterStyled } from "./global.css";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";

const App = () => (
  <BrowserRouter>
    <Global />
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pageTwo" exact component={PageTwo} />
    </Switch>
  </BrowserRouter>
);

export default App;
