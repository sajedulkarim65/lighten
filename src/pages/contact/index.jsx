// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Button from "../../components/button";

function Contact() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* Contact Part */}
      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <form class="main_form">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Your name"
                      type="text"
                      name="Your Name"
                    ></input>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    ></input>
                  </div>
                  <div class=" col-md-12">
                    <input
                      class="form-control"
                      placeholder="Phone"
                      type="text"
                      name="Phone"
                    ></input>
                  </div>
                  <div class="col-md-12">
                    <textarea class="textarea" placeholder="Message"></textarea>
                  </div>
                  {/* Button */}
                  <Button btnText="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Part */}
      <Footer />
    </div>
  );
}

export default Contact;
