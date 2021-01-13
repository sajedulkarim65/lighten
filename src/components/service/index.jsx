//
// import serviceIcon1 from "../../../assets/icon/service1.png";

function ServiceCard({ images, heading, description }) {
  return (
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
      <div class="service-box">
        <i>
          <img src={images} />
        </i>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
