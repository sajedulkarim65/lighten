// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import BlogItem from "../../components/blogItem";

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
            {/* Blog Item */}
            <BlogItem
              blogImages={blogImg1}
              heading="Live With Music (1)"
              blogDate="20th March"
            />
            <BlogItem
              blogImages={blogImg2}
              heading="Live With Music (2)"
              blogDate="20th March"
            />
            <BlogItem
              blogImages={blogImg3}
              heading="Live With Music (3)"
              blogDate="20th March"
            />
            <BlogItem
              blogImages={blogImg3}
              heading="Live With Music (4)"
              blogDate="20th March"
            />
            <BlogItem
              blogImages={blogImg1}
              heading="Live With Music (5)"
              blogDate="20th March"
            />
            <BlogItem
              blogImages={blogImg2}
              heading="Live With Music (6)"
              blogDate="20th March"
            />
          </div>
        </div>
      </div>
      {/* Footer Part */}
      <Footer />
    </div>
  );
}

export default Blog;
