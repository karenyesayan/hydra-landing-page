import Slider from "react-slick";
import { motion } from "framer-motion";

import Description from "../Description";
import { hash } from "../../helpers";
import { SampleNextArrow, SamplePrevArrow } from "../Arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EducationImage from "./EducationImage.jpg";
import OutdoorImage from "./OutdoorImage.jpg";
import SelfCareImage from "./SelfCareImage.jpg";
import SimulationImage from "./SimulationImage.jpg";

const servicesList = [
  {
    id: `${hash()}${hash()}`,
    title: "SIMULATION",
    description: `Vitae sapien pellentesque habitant morbi
      nunc. Viverra aliquet  porttitor rhoncus 
      libero justo laoreet sit amet vitae.`,
    href: "/#",
    image: SimulationImage,
    alt: "Simulation",
  },
  {
    id: `${hash()}${hash()}`,
    title: "EDUCATION",
    description: `Vitae sapien pellentesque habitant morbi
      nunc. Viverra aliquet  porttitor rhoncus 
      libero justo laoreet sit amet vitae.`,
    href: "/#",
    image: EducationImage,
    alt: "Education",
  },
  {
    id: `${hash()}${hash()}`,
    title: "SELF-CARE",
    description: `Vitae sapien pellentesque habitant morbi
      nunc. Viverra aliquet  porttitor rhoncus 
      libero justo laoreet sit amet vitae.`,
    href: "/#",
    image: SelfCareImage,
    alt: "Self care",
  },
  {
    id: `${hash()}${hash()}`,
    title: "OUTDOOR",
    description: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    href: "/#",
    image: OutdoorImage,
    alt: "Outdoor",
  },
];

const CustomSlide = ({ title, description, href, image, alt }) => {
  return (
    <div className="flex h-[526px] w-auto items-end">
      <div className="mx-auto flex h-[511px] w-[88.88%] items-center justify-center rounded-[40px] bg-[radial-gradient(50.00%_50.00%_at_50.00%_50.00%,_#433D60_0%,_#211E2E_100%)] transition  duration-300  hover:translate-y-[-15px] min-[412px]:w-[310px]">
        <div className="flex w-[78.125%] flex-col items-center min-[412px]:w-[80.645%]">
          <div className="mb-[21px] flex h-[219px] w-[219px] items-center justify-center rounded-full bg-[rgba(14,14,14,0.32)]">
            <img
              className="h-[190.923px] w-[190.923px] rounded-full"
              src={image}
              alt={alt}
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <hr className="mb-[21.5px] mt-[17.5px] h-px w-[154px] border-[rgba(192,183,232,0.33)] bg-[rgba(192,183,232,0.33)] text-[rgba(192,183,232,0.33)]" />
          <p className="mb-[35px] font-normal">{description}</p>
          <a
            href={href}
            role="button"
            className="btn-primary h-12 w-[100%] sm:w-[154px]"
          >
            TRY IT NOW
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow type="primary" />,
    prevArrow: <SamplePrevArrow type="primary" />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="container pt-[60px] md:pt-[111px]" id="services">
        <Description
          headline="WHY BUILD"
          subheading="WITH HYDRA?"
          paragraph="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
          isPrimary={true}
        />
        <div className="relative mt-[11px] md:mt-[59px]">
          <motion.svg
            initial={{ strokeDashoffset: 2366.19189453125 }}
            whileInView={{ strokeDashoffset: 4732.3837890625 }}
            animate={{
              strokeDasharray: ["2366.19189453125"],
              animationFillMode: "both",
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="820"
            viewBox="0 0 1440 820"
            fill="none"
            className="absolute left-[-77.5px] top-[99px] z-[-1] hidden h-[352px] w-[617px]  lg:block lg:h-[814px] lg:w-[1442px]"
          >
            <path
              d="M-3 231.214C96.569 254.827 300.21 358.641 318.223 584.988C336.235 811.336 680.641 830.311 850.592 811.505C959 791.003 1139.69 689.084 995.192 445.43C850.692 201.775 1230.86 48.9539 1439 3"
              stroke="url(#paint0_linear_11_14)"
              strokeOpacity="0.13"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_14"
                x1="718"
                y1="3"
                x2="718"
                y2="817"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0260417" stopColor="#C0B7E8" />
                <stop offset="0.265625" stopColor="#C0B7E8" />
                <stop offset="0.71875" stopColor="#8176AF" />
                <stop offset="1" stopColor="#343045" />
              </linearGradient>
            </defs>
          </motion.svg>
          <Slider {...settings}>
            {servicesList.map((item) => (
              <CustomSlide {...item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
