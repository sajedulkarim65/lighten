// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";

function ErrorPage() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* 404 part */}
      <div style={{ background: "#ffff5a", textAlign: "center" }}>
        <h1 style={{ fontSize: 300, color: "#494949" }}>404</h1>
        <h3 style={{ fontSize: 40, paddingBottom: 100, color: "#949494" }}>
          Page Not Found!!!!
        </h3>
      </div>
      {/* Footer part */}
      <Footer />
    </div>
  );
}

export default ErrorPage;
