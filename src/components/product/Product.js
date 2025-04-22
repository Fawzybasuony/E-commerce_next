// "use client";
import { useContext } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slidar from "../Slider_Heder/Slider_Heder";
import Lest_Products from "../Latest Products/Lest_Products";
import ThemeContexttt from "../../context/page";
import "./product.css";
import Slidarrr from "../logoslidar/Logo_Slider";
import Btn from "./Btn/Btn";

export default function Product() {
  // const { name } = useContext(ThemeContexttt);
  const featuresData = [
    {
      id: 1,
      img: "/main_lest/f-delivery.png",
      title: "Free shipping",
      desc: "Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum malesuada aliquet libero viverra cursus.",
      className: "first",
    },
    {
      id: 2,
      img: "/main_lest/coin.png",
      title: "100% Money back",
      desc: "Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum malesuada aliquet libero viverra cursus.",
      className: "second",
    },
    {
      id: 3,
      img: "/main_lest/chat.png",
      title: "Online support 24/7",
      desc: "Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum malesuada aliquet libero viverra cursus.",
      className: "",
    },
  ];

  return (
    <>
      {/* {!name ? (
        <h1>
          You must be signed in to view the protected content on this page
          <FontAwesomeIcon
            style={{ width: "22px", height: "20px", marginBottom: "5px" }}
            icon={faLock}
          />
        </h1>
      ) : ( */}
      <>
        <section className="features-section">
          <div className="features-ads">
            <div className="container">
              <div className="row ">
                {featuresData.map((feature) => (
                  <div className="col-lg-4" key={feature.id}>
                    <div className={`single-features-ads ${feature.className}`}>
                      <img src={feature.img} alt={feature.title} />
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* END */}

        <Lest_Products />

        {/* END */}

        <section className="lookbok-section">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-lg-4 offset-lg-1">
                <div className="lookbok-left">
                  {/* title */}
                  <div className="section-title">
                    <span># violet</span>
                  </div>

                  {/* deccrition */}
                  <div>
                    <p>
                      Enjoy fast and reliable delivery, tailored to make your
                      life easier every step of the way. We offer flexible
                      payment options and guaranteed satisfaction with every
                      purchase. Our store is designed to provide an effortless
                      and secure checkout process. Shop the latest collections
                      with confidence, knowing our team is always ready to help.
                      We’re committed to delivering quality, style, and
                      convenience — all in one place. Experience 24/7 customer
                      support and a hassle-free return policy. Your perfect
                      product is just a click away — welcome to smarter
                      shopping!
                    </p>
                  </div>
                  {/* Bottom */}
                  <Btn />
                  {/* End */}
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <div className="lookbok-pic">
                  <img
                    loading="lazy"
                    className="rounded"
                    src="/images/f-box-3.jpg"
                    alt="fashon"
                  />
                  <div className="pic-text">fashion</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* END */}

        <Slidarrr />

        {/* proooductttt  Herrrr */}
      </>
      {/* )} */}
    </>
  );
}
