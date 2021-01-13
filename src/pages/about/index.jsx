// Import Components
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Button from "../../components/button";
import ServiceCard from "../../components/service";
import ChooseItem from "../../components/choose";

// Import Asset
import lightenImg from "../../assets/images/pc_layout.png";
import icon1 from "../../assets/icon/1.png";
import icon2 from "../../assets/icon/2.png";
import icon3 from "../../assets/icon/3.png";
import icon4 from "../../assets/icon/4.png";
import serviceIcon1 from "../../assets/icon/service1.png";
import serviceIcon2 from "../../assets/icon/service2.png";
import serviceIcon3 from "../../assets/icon/service3.png";
import serviceIcon4 from "../../assets/icon/service4.png";
import serviceIcon5 from "../../assets/icon/service5.png";
import serviceIcon6 from "../../assets/icon/service6.png";

function About() {
  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* About Part */}

      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>about</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Who is Lighten Part */}
      <div class="about">
        <div class="container">
          <div class="row">
            <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">
                <figure>
                  <img src={lightenImg} />
                </figure>
              </div>
            </dir>
            <dir class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">
                <h3>Who is Lighten</h3>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum.
                </p>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </dir>
          </div>
        </div>
      </div>

      {/* Why Choose Part */}
      <div class="whyschose">
        <div class="container">
          <div class="row">
            <div class="col-md-7 offset-md-3">
              <div class="title">
                <h2>
                  Why <strong class="black">choose us</strong>
                </h2>
                <span>Fastest repair service with best price!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="choose_bg">
        <div class="container">
          <div class="white_bg">
            <div class="row">
              {/* first Item */}
              <ChooseItem
                icons={icon1}
                heading="Data recovery (1)"
                description="Perspiciatis eos quos totam cum minima autPerspiciatis eos quos (1)"
              />
              <ChooseItem
                icons={icon2}
                heading="Data recovery (2)"
                description="Perspiciatis eos quos totam cum minima autPerspiciatis eos quos (2)"
              />
              <ChooseItem
                icons={icon3}
                heading="Data recovery (3)"
                description="Perspiciatis eos quos totam cum minima autPerspiciatis eos quos (3)"
              />
              <ChooseItem
                icons={icon4}
                heading="Data recovery (4)"
                description="Perspiciatis eos quos totam cum minima autPerspiciatis eos quos (4)"
              />
              {/* Button */}
              <Button btnText="Read More" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Part  */}

      <div class="service">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="title">
                <h2>
                  service <strong class="black">proces</strong>
                </h2>
                <span>Easy and effective way to get your device repaired.</span>
              </div>
            </div>
          </div>
          <div class="row">
            <ServiceCard
              images={serviceIcon1}
              description="(1) Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
              heading="Second Service"
            />
            <ServiceCard
              images={serviceIcon2}
              description="(2) Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
              heading="Third Service"
            />
            <ServiceCard
              images={serviceIcon3}
              description="(3) Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
              heading="First Service"
            />
            <ServiceCard
              images={serviceIcon4}
              description="(4) Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
              heading="Sixth Service"
            />
            <ServiceCard
              images={serviceIcon5}
              description="(5) Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
              heading="Fourth Secvice"
            />
            <ServiceCard
              images={serviceIcon6}
              description="(6) Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex"
              heading="Fifth Service"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
