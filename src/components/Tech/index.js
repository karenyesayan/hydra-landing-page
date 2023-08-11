import Slider from "react-slick";

import { hash } from "../../helpers";

import { SampleNextArrow, SamplePrevArrow } from "../Arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TechImage from "./TechImage.jpg";
import UnrealEngineLogo from "./UnrealEngineLogo.png";
import UnityLogo from "./UnityLogo.png";
import OculusLogo from "./OculusLogo.png";
import ViveLogo from "./ViveLogo.png";

const techLogos = [
  {
    id: `${hash()}${hash()}`,
    href: "https://www.unrealengine.com/",
    image: UnrealEngineLogo,
    alt: "Unreal Engine",
  },
  {
    id: `${hash()}${hash()}`,
    href: "https://unity.com/",
    image: UnityLogo,
    alt: "Unity",
  },
  {
    id: `${hash()}${hash()}`,
    href: "https://www.oculus.com/",
    image: OculusLogo,
    alt: "Oculus",
  },
  {
    id: `${hash()}${hash()}`,
    href: "https://www.vive.com/",
    image: ViveLogo,
    alt: "Vive",
  },
];

const CustomSlide = ({ href, image, alt }) => {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <img
        className="m-auto max-h-[252px] min-w-[174px] max-w-full	object-contain min-[370px]:w-full"
        src={image}
        alt={alt}
        width={100}
        height={100}
      />
    </a>
  );
};

const Tech = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow type="primary" />,
    prevArrow: <SamplePrevArrow type="primary" />,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container pt-14 md:pt-[114px]" id="technologies">
        <a
          className="flex h-[163.354px] max-w-[1278px] flex-col items-center justify-center rounded-[60px] bg-cover bg-[center_50%] bg-no-repeat shadow-[0px_4px_4px_0px_rgba(192,183,232,0.01)] md:h-[303px] md:rounded-[160px]"
          style={{
            backgroundImage: `url(${TechImage})`,
          }}
          href="/#"
        >
          <h2 className="text-base font-bold leading-10 md:text-4xl md:leading-[4.6rem]">
            TECHNOLOGIES & HARDWARE
          </h2>
          <p className="text-2xl font-light md:text-4xl">USED BY HYDRA VR.</p>
        </a>
        <div className="mt-[-9.5px] md:mt-[74px]">
          <Slider {...settings}>
            {techLogos.map((item) => (
              <CustomSlide {...item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Tech;
