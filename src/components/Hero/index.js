import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { isLarge } from "../../constants";
import { hash, classNames } from "../../helpers";

import { SampleNextArrow, SamplePrevArrow } from "../Arrows";

import HeroImage from "./HeroImage.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const callsToAction = [
  {
    id: `${hash()}${hash()}`,
    name: "Pay Us a Visit",
    description: "Union St, Seattle, WA 98101, United States",
    href: "https://www.google.com/maps/place/Union+St,+Seattle,+WA+98101,+USA/@47.6099139,-122.3341167,17z/data=!3m1!4b1!4m6!3m5!1s0x54906ab465f9a32d:0x2b0d2afe1e719e15!8m2!3d47.6099139!4d-122.3341167!16s%2Fg%2F1vcq795y?entry=ttu",
    icon: MapPinIcon,
  },
  {
    id: `${hash()}${hash()}`,
    name: "Give Us a Call",
    description: "(110) 1111-1010",
    href: "tel:+11011111010",
    icon: PhoneIcon,
  },
  {
    id: `${hash()}${hash()}`,
    name: "Send Us a Message",
    description: "Contact@HydraVTech.com",
    href: "mailto:Contact@HydraVTech.com",
    icon: EnvelopeIcon,
  },
];

const CustomSlide = ({ item, index }) => {
  return (
    <div className="relative flex flex-col items-center gap-x-2.5 text-center hover:brightness-200 min-[390px]:flex-row min-[390px]:text-left   lg:h-[116.5px] lg:gap-4">
      <div
        className={classNames(
          index && "min-[1075px]:before:block",
          "flex flex-none items-center justify-center before:relative before:left-0 before:mr-[47.5px] before:hidden before:h-[116.5px] before:w-[1px] before:bg-[rgba(192,183,232,0.33)] before:content-['']"
        )}
      >
        <item.icon
          className="h-[65px] w-[65px]  text-periwinkle"
          aria-hidden="true"
        />
      </div>
      <div className="flex-auto">
        <a
          href={item.href}
          rel="noreferrer"
          target="_blank"
          className="hidden whitespace-nowrap text-2xl font-bold min-[1235px]:flex"
        >
          {item.name}
          <span className="absolute inset-0" />
        </a>
        <p className="mt-1  hidden text-sm min-[90px]:flex">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow type="basic" />,
    prevArrow: <SamplePrevArrow type="basic" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 897,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "4px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "-3px",
        },
      },
    ],
  };

  return (
    <section>
      <div className="container">
        <div className="relative isolate flex flex-wrap-reverse justify-between">
          <motion.svg
            initial={{ strokeDashoffset: 656.5198364257812 }}
            whileInView={{ strokeDashoffset: 0 }}
            animate={{
              strokeDasharray: ["656.5198364257812"],
              animationFillMode: "both",
            }}
            transition={{
              duration: 1.7,
              transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="243"
            height="565"
            viewBox="0 0 243 565"
            fill="none"
            className="absolute left-[-77px] top-[69px] z-[-1] hidden h-[352px] w-[617px] lg:block lg:h-[561px] lg:w-[238.075px]"
          >
            <path
              d="M1.5 3C104.5 41.1667 293.4 206.8 225 564"
              stroke="url(#paint0_linear_2_34)"
              strokeOpacity="0.06"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_34"
                x1="-23.5"
                y1="-37.5"
                x2="333"
                y2="602.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#343045"></stop>
                <stop offset="0.151042" stop-color="#C0B7E8">
                  <animate
                    attributeName="stop-color"
                    values="#C0B7E8;#8176AF;#C0B7E8;"
                    dur="5s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="0.760417" stop-color="#8176AF">
                  <animate
                    attributeName="stop-color"
                    values="#8176AF;#C0B7E8;#8176AF;"
                    dur="5s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop offset="0.973958" stop-color="#343045"></stop>
              </linearGradient>
            </defs>
          </motion.svg>
          <motion.div
            initial={{ y: isLarge ? 80 : 0, x: 0, opacity: isLarge ? 0 : 1 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{
              type: "tween",
              duration: 1.2,
              delay: 0.7,
              ease: [0.25, 0.25, 0.25, 0.75],
            }}
            className="mx-auto max-w-md pt-[30px] text-center md:flex-auto md:text-left min-[1002px]:pt-24 lg:mx-0"
          >
            <h1 className="bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-4xl font-bold leading-[3.2rem] tracking-tight text-transparent min-[520px]:text-[46px] min-[520px]:leading-[3.5rem]">
              Dive
              <span className="text-[24px] tracking-tight text-white min-[520px]:text-[40px]">
                {" "}
                Into The Depths Of{" "}
              </span>
              Virtual Reality
            </h1>
            <p className="mt-9 hidden text-base font-normal min-[1002px]:flex">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="mt-9 flex items-center justify-center gap-[38.5px] md:justify-start lg:mt-[66px]">
              <a
                href="/#"
                role="button"
                className="btn-primary h-[52px] w-[292px] lg:h-12 lg:w-[214px]"
              >
                BUILD YOUR WORLD
              </a>
              <a
                href="/#"
                className="hidden text-periwinkle hover:text-white min-[520px]:block"
              >
                <ArrowRightIcon className="w-[50px]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
          <div className="mt-[22.79px] min-[355px]:relative min-[355px]:mx-auto lg:m-0 lg:mt-12">
            <motion.svg
              initial={{ strokeDashoffset: 947.6283569335938 }}
              whileInView={{ strokeDashoffset: 1895.2567138671875 }}
              animate={{
                strokeDasharray: ["947.6283569335938"],
                animationFillMode: "both",
              }}
              transition={{
                duration: 1.5,
                delay: 1.5,
                transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="736"
              height="423"
              viewBox="0 0 736 423"
              fill="none"
              className="absolute left-[-164px] top-[138px] z-[-1] block h-[352px] w-[617px] sm:left-[-91px] sm:h-[419.323px] sm:w-[735.029px]"
            >
              <path
                d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5"
                stroke="url(#paint0_linear_2_33)"
                strokeWidth="6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_33"
                  x1="700.5"
                  y1="-3.99998"
                  x2="14.5"
                  y2="361"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#343045"></stop>
                  <stop offset="0.213542" stop-color="#C0B7E8">
                    <animate
                      attributeName="stop-color"
                      values="#C0B7E8;#8176AF;#C0B7E8;"
                      dur="5s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="0.71875" stop-color="#8176AF">
                    <animate
                      attributeName="stop-color"
                      values="#8176AF;#C0B7E8;#8176AF;"
                      dur="5s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="1" stop-color="#343045"></stop>
                </linearGradient>
              </defs>
            </motion.svg>
            <motion.div
              initial={{
                y: isLarge ? -80 : 0,
                x: 0,
                opacity: isLarge ? 0 : 1,
              }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{
                type: "tween",
                duration: 1.2,
                delay: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              className="flex h-[296px] w-[340px] items-center justify-center rounded-[100px_100px_100px_240px] bg-[rgba(0,_0,_0,_0.13)] max-[355px]:ml-[-5%] min-[667px]:h-[455px] min-[667px]:w-[524px]"
            >
              <img
                className="absolute w-[93.725%] max-w-none rounded-[100px_100px_100px_240px] bg-[#A3A3A3] shadow-white-aluminium min-[667px]:w-[490px]"
                src={HeroImage}
                alt="Hero"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.svg
              initial={{ strokeDashoffset: 871.8951416015625 }}
              whileInView={{ strokeDashoffset: 0 }}
              animate={{
                strokeDasharray: ["871.8951416015625"],
                animationFillMode: "both",
              }}
              transition={{
                duration: 1.5,
                delay: 1.5,
                transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="416"
              height="675"
              viewBox="0 0 416 675"
              fill="none"
              className="absolute left-[53px] top-[-38px] z-[-1] block h-[562px] w-[347px]  sm:left-[204px] sm:top-[-92px] sm:h-[669px] sm:w-[414px]"
            >
              <path
                d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
                stroke="url(#paint0_linear_1_23)"
                strokeWidth="6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_23"
                  x1="365.5"
                  y1="28"
                  x2="110"
                  y2="594"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#343045"></stop>
                  <stop offset="0.276042" stop-color="#8176AF">
                    <animate
                      attributeName="stop-color"
                      values="#8176AF;#C0B7E8;#8176AF;"
                      dur="6s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="0.739583" stop-color="#C0B7E8">
                    <animate
                      attributeName="stop-color"
                      values="#C0B7E8;#8176AF;#C0B7E8;"
                      dur="6s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="1" stop-color="#343045"></stop>
                </linearGradient>
              </defs>
            </motion.svg>
            <motion.svg
              initial={{ strokeDashoffset: 996.31298828125 }}
              whileInView={{ strokeDashoffset: 1992.6259765625 }}
              animate={{
                strokeDasharray: ["996.31298828125"],
                animationFillMode: "both",
              }}
              transition={{
                duration: 1.5,
                delay: 1.5,
                transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="383"
              height="846"
              viewBox="0 0 383 846"
              fill="none"
              className="absolute left-[-2px] top-[-182px] z-[-1] block h-[709px] w-[316px] sm:left-[105px] sm:top-[-258px] sm:h-[845px] sm:w-[377px]"
            >
              <path
                d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
                stroke="url(#paint0_linear_1_24)"
                strokeWidth="6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_24"
                  x1="16.5"
                  y1="39.5"
                  x2="363"
                  y2="814"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0104167" stop-color="#343045"></stop>
                  <stop offset="0.229167" stop-color="#C0B7E8">
                    <animate
                      attributeName="stop-color"
                      values="#C0B7E8;#8176AF;#C0B7E8;"
                      dur="4s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="0.776042" stop-color="#8176AF">
                    <animate
                      attributeName="stop-color"
                      values="#8176AF;#C0B7E8;#8176AF;"
                      dur="4s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="1" stop-color="#343045"></stop>
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-[53px] rounded-[90px] bg-[radial-gradient(2900.76%_50.13%_at_50.00%_53.89%,_rgba(58,52,86,0.95)_0%,_#211E2E_100%)] px-[40px]  pb-[18px]  pt-[21px] shadow-[0_4px_4px_0px_rgba(192,183,232,0.01)] lg:mt-[88px] lg:pb-[25.25px] lg:pt-[25.25px]">
          <Slider {...settings}>
            {callsToAction.map((item, index) => (
              <CustomSlide item={item} index={index} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
