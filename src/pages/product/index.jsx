//
import Nav from "../../components/nav";
import Footer from "../../components/footer";

// Import Assets
import productImg1 from "../../assets/icon/p1.png";
import productImg2 from "../../assets/icon/p2.png";
import productImg3 from "../../assets/icon/p3.png";
import productImg4 from "../../assets/icon/p4.png";
import productImg7 from "../../assets/icon/p7.png";
import productImg5 from "../../assets/icon/p5.png";
import productImg6 from "../../assets/icon/p6.png";

function Product() {
  return (
    <div>
      {/* Navbar */}
      <Nav />
      {/* Product Part */}
      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>our product</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <span>
                  We package the products with best services to make you a happy
                  customer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-bg">
        <div class="product-bg-white">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg1} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg2} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg3} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg4} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg5} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg6} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg7} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg1} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg2} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg3} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg4} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="product-box">
                  <i>
                    <img src={productImg5} />
                  </i>
                  <h3>Norton Internet Security</h3>
                  <span>$25.00</span>
                </div>
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

export default Product;
