import App from "./App";

import { Router, Redirect } from "@reach/router";

// Import Custom Components
import Home from "../pages/home";
import About from "../pages/about";
import Product from "../pages/product";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import ErrorPage from "../pages/error";

function AppRouter() {
  return (
    <Router>
      <Home path="/" />
      <Redirect from="about" to="/" noThrow />
      <About path="about/:aboutID" />
      <Product path="product/:productID" />
      <Blog path="blog/:blogID" />
      <Contact path="contact/:contactID" />
      <ErrorPage default />
    </Router>
  );
}

export default AppRouter;
