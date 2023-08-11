import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import Description from "../Description";
import { SampleNextArrow, SamplePrevArrow } from "../Arrows";

import { hash, classNames } from "../../helpers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const steps = [
  {
    id: `${hash()}${hash()}`,
    label: "3D Conception & Design",
    step: "01",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    label: "Interaction Design",
    step: "02",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    label: "VR World User Testing",
    step: "03",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    label: "Hydra VR Deploy",
    step: "04",
    href: "/#",
  },
];

const CustomSlide = ({ label, step, href }) => {
  return (
    <a
      className="flex flex-col items-center pb-60 hover:text-periwinkle"
      href={href}
    >
      <div className="h-[198px] w-[198px] rounded-full border-[19.5px] border-[rgba(13,13,13,0.32)] bg-[linear-gradient(251deg,_#C0B7E8_0%,_#8176AF_100%)] bg-clip-padding text-center text-[64px]  font-bold leading-[10rem] text-[#343045]">
        {step}
      </div>
      <div
        className={classNames(
          step !== "01" && "md:pl-[33.5px]",
          "flex pt-[37px] md:gap-[12.5px] md:pt-6"
        )}
      >
        <ArrowRightIcon
          className="hidden h-[33.5px] w-[33.5px] stroke-[3px] text-periwinkle hover:text-white md:block"
          aria-hidden="true"
        />
        <div className="w-[187px] text-2xl font-bold max-md:text-center">
          {label}
        </div>
      </div>
    </a>
  );
};

const Process = () => {
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
        breakpoint: 1090,
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
      <div className="container pt-[-10px] md:pt-[84px]" id="how-to">
        <Description
          headline="HOW WE BUILD"
          subheading="WITH HYDRA VR?"
          paragraph="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
          isPrimary={true}
        />
        <div className="relative mt-[37px] md:mt-[91px]">
          <motion.svg
            initial={{ strokeDashoffset: 1669.3153076171875 }}
            whileInView={{ strokeDashoffset: 0 }}
            animate={{
              strokeDasharray: ["1669.3153076171875"],
              animationFillMode: "both",
            }}
            transition={{
              duration: 4,
              transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="169"
            viewBox="0 0 1440 169"
            fill="none"
            className="absolute left-[-81.5px] top-0 z-[-1] hidden h-[352px] w-[617px]  lg:h-[163px] lg:w-[1449px] min-[1090px]:block"
          >
            <path
              d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768"
              stroke="url(#paint0_linear_11_136)"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_136"
                x1="0.49999"
                y1="84.9999"
                x2="1440"
                y2="84.9998"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#343045" />
                <stop offset="0.302083" stopColor="#C0B7E8" />
                <stop offset="0.739583" stopColor="#8176AF" />
                <stop offset="1" stopColor="#343045" />
              </linearGradient>
            </defs>
          </motion.svg>
          <Slider {...settings}>
            {steps.map((item) => (
              <CustomSlide {...item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Process;
