//
import Nav from "../../components/nav";
import Footer from "../../components/footer";

// Import Assets
import blogImg1 from "../../assets/images/1.jpg";
import blogImg2 from "../../assets/images/2.jpg";
import blogImg3 from "../../assets/images/3.jpg";

function Blog() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* Blog Part */}

      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Lastestnews blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
              <div class="news-box">
                <figure>
                  <img src={blogImg1} alt="img" />
                </figure>
                <h3>Live With Music</h3>
                <span> March 20</span>
                <span>Comment</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
              <div class="news-box">
                <figure>
                  <img src={blogImg2} alt="img" />
                </figure>
                <h3>Best Music</h3>
                <span> March 20</span>
                <span>Comment</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
              <div class="news-box">
                <figure>
                  <img src={blogImg3} alt="img" />
                </figure>
                <h3>Live With Music</h3>
                <span> March 20</span>
                <span>Comment</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div class="news-box">
                <figure>
                  <img src={blogImg2} alt="img" />
                </figure>
                <h3>Live With Music</h3>
                <span> March 20</span>
                <span>Comment</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div class="news-box">
                <figure>
                  <img src={blogImg3} alt="img" />
                </figure>
                <h3>Live With Music</h3>
                <span> March 20</span>
                <span>Comment</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div class="news-box">
                <figure>
                  <img src={blogImg1} alt="img" />
                </figure>
                <h3>Best Music</h3>
                <span> March 20</span>
                <span>Comment</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Part */}
      <Footer />
    </div>
  );
}

export default Blog;
