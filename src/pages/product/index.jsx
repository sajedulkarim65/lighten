// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import CreateProduct from "../../components/createProduct";

// Import Assets
import productImg1 from "../../assets/icon/p1.png";
import productImg2 from "../../assets/icon/p2.png";
import productImg3 from "../../assets/icon/p3.png";
import productImg4 from "../../assets/icon/p4.png";
import productImg5 from "../../assets/icon/p5.png";
import productImg6 from "../../assets/icon/p6.png";
import productImg7 from "../../assets/icon/p7.png";

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
              {/* Products */}
              <CreateProduct
                productImages={productImg1}
                productName="Norton Internet Security (1)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg2}
                productName="Norton Internet Security (2)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg3}
                productName="Norton Internet Security (3)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg4}
                productName="Norton Internet Security (4)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg5}
                productName="Norton Internet Security (5)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg6}
                productName="Norton Internet Security (6)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg7}
                productName="Norton Internet Security (7)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg1}
                productName="Norton Internet Security (8)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg2}
                productName="Norton Internet Security (9)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg4}
                productName="Norton Internet Security (10)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg5}
                productName="Norton Internet Security (11)"
                price="$25.00"
              />
              <CreateProduct
                productImages={productImg2}
                productName="Norton Internet Security (12)"
                price="$25.00"
              />
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
