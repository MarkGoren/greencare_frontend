import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/image1.avif";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.avif";
import { useScroll, animated } from "@react-spring/web";
import PrlxWebExplain from "./prlxWebExplain";
import { useContext } from "react";
import { GreencareData } from "../App";

export default function HomeUnlogged() {
  const data = useContext(GreencareData);

  return (
    <>
      {/* <div className="home-unlogged-page1">
        <div className="home-unlogged-page1-header">
          Come clean with us! Give our planet a second chance.
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
      </div> */}

      <PrlxWebExplain></PrlxWebExplain>

      {/* <animated.div style={{ opacity: scrollYProgress }}>
        <div className="home-unlogged-page2">So How it works?</div>
      </animated.div>

      <animated.div style={{ opacity: scrollYProgress }}>
        <div className="home-unlogged-page2">first you report a place</div>
      </animated.div>

      <animated.div style={{ opacity: scrollYProgress }}>
        <div className="home-unlogged-page2">second you start a gathering</div>
      </animated.div>

      <animated.div style={{ opacity: scrollYProgress }}>
        <div className="home-unlogged-page2">wait for people to join...</div>
      </animated.div>

      <animated.div style={{ opacity: scrollYProgress }}>
        <div className="home-unlogged-page2">
          gathering day has come, do the cleaning and collect your prize!
        </div>
      </animated.div> */}
    </>
  );
}
