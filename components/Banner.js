import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className=" mt-2 ">
      {/* <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" /> */}
      <Carousel
        autoplay
        infiniteLoop
        showStatus={false}
        shoIndicators={false}
        showThumbs={false}
        showStatus
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi" alt="" />
        </div>
        <div>
          <img loading="lazy" src="./img/banner1.jpeg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="./img/banner1.jpeg" alt="" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
