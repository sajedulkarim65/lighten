// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";

// Import Assets
import BannerImg from "../../assets/images/banner2.jpg";

function Home() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Nav />
      {/* Banner part Start */}

      <section class="slider_section">
        <div
          id="main_slider"
          class="carousel slide banner-main"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="first-slide" src={BannerImg} alt="First slide"></img>
              <div class="container">
                <div class="carousel-caption relative">
                  <h1>
                    Our <strong class="black_bold">Latest </strong>
                    <strong class="yellow_bold">Product </strong>
                  </h1>
                  <p>
                    It is a long established fact that a r eader will be
                    distracted by the readable content of a page
                  </p>
                  <a href="#">see more Products</a>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#main_slider"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-angle-right"></i>
          </a>
          <a
            class="carousel-control-next"
            href="#main_slider"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-angle-left"></i>
          </a>
        </div>
      </section>
      
      {/* Footer Part */}
      
      <Footer />
    </div>
  );
}

export default Home;
