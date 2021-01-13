//

function ChooseItem({ icons, heading, description }) {
  return (
    <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div class="for_box">
        <i>
          <img src={icons} />
        </i>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </dir>
  );
}

export default ChooseItem;
