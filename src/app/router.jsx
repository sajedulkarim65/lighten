import App from "./App";

import { Router, Redirect } from "@reach/router";

// Import Custom Components
import Home from "../pages/home";
import About from "../pages/about";
import Product from "../pages/product";
import Blog from "../pages/blog";
import Contact from "../pages/contact";

function AppRouter() {
  return (
    <Router>
      <Home path="/" />
      <About path="about/:aboutID" />
      <Product path="product/:productID" />
      <Blog path="blog/:blogID" />
      <Contact path="contact/:contactID" />
    </Router>
  );
}

export default AppRouter;
