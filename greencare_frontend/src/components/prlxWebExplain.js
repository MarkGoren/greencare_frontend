import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/image1.avif";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.avif";
import thinking from "../assets/thinking.webp";
import polluted from "../assets/polluted.avif";
import handPhoneReport from "../assets/hand_holding_report.png";
import handSwipingInit from "../assets/hand_swiping_init.png";
import handNotifications from "../assets/hand_notif.png";
import notif1 from "../assets/iphone-notification1.png";
import notif2 from "../assets/iphone-notification2.png";
import notif3 from "../assets/iphone-notification3.png";
import notif4 from "../assets/iphone-notification4.png";
import iphonePrize from "../assets/iphone-trans.png";
import gift1 from "../assets/gift1.png";
import gift2 from "../assets/gift2.png";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function PrlxWebExplain() {
  return (
    <Parallax pages={7}>
      <ParallaxLayer offset={0} speed={0.2}>
        <div className="home-unlogged-page1">
          <div className="home-unlogged-page1-header">
            <h1>Come clean with us! Give our planet a second chance🙏</h1>
          </div>

          <div className="image-carousel">
            <Carousel
              width={"60%"}
              autoPlay={true}
              infiniteLoop={true}
              stopOnHover={true}
              showThumbs={false}
            >
              <div>
                <img alt="oopsie" src={image1}></img>
                <p className="legend">Meet new friends!</p>
              </div>
              <div>
                <img alt="oopsie" src={image2}></img>
                <p className="legend">Enjoy the wild!</p>
              </div>
              <div>
                <img alt="oopsie" src={image3}></img>
                <p className="legend">Make the world a better place!</p>
              </div>
            </Carousel>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <div className="home-unlogged-page2">
          <h2>So how does it work?</h2>
          <img src={thinking} alt="oopsie" className="prlx-img1"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.6}>
        <div className="home-unlogged-page2">
          <h2>first you report a place</h2>
          <img src={polluted} alt="oopsie" className="prlx-img2"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer style={{ zIndex: 100 }} offset={2} speed={0.4}>
        <div className="home-unlogged-page2">
          <img src={handPhoneReport} alt="oopsie" className="prlx-img3"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.7}>
        <div className="home-unlogged-page2">
          <h2>second you start a gathering</h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer style={{ zIndex: 100 }} offset={3} speed={0.4}>
        <div className="home-unlogged-page2">
          <img src={handSwipingInit} alt="oopsie" className="prlx-img4"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.8}>
        <div className="home-unlogged-page2">
          <h2>wait for people to join...</h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.4}>
        <div className="home-unlogged-page2">
          <img src={handNotifications} alt="oopsie" className="prlx-img5"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.2}>
        <div className="prlx-notif1">
          <img src={notif1} alt="oopsie" className="prlx-img6"></img>
          <img src={notif2} alt="oopsie" className="prlx-img7"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.1}>
        <div className="prlx-notif1">
          <img src={notif3} alt="oopsie" className="prlx-img8"></img>
          <img src={notif4} alt="oopsie" className="prlx-img9"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.9}>
        <div className="home-unlogged-page2">
          <h2>
            gathering day has come, do the cleaning and collect your prize!
          </h2>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.6}>
        <div className="home-unlogged-page2">
          <img src={iphonePrize} alt="oopsie" className="prlx-img10"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.4}>
        <div className="home-unlogged-page2">
          <img src={gift1} alt="oopsie" className="prlx-img11"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.5}>
        <div className="home-unlogged-page2">
          <img src={gift2} alt="oopsie" className="prlx-img12"></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={6}>
        <div className="home-unlogged-page2">
          <Link className="link" to={"/register"}>
            <div className="create-account-button">Create account!</div>
          </Link>
        </div>
        <Footer></Footer>
      </ParallaxLayer>
    </Parallax>
  );
}
