//

function CreateProduct({ productImages, productName, price }) {
  return (
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div class="product-box">
        <i>
          <img src={productImages} />
        </i>
        <h3>{productName}</h3>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default CreateProduct;
