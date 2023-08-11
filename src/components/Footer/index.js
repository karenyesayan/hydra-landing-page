import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { hash } from "../../helpers";

import { navigation } from "../../data";

import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Youtube } from "./youtube.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as Pinterest } from "./pinterest.svg";

import logo from "../../logo.svg";

const secondNavColumn = [
  {
    id: `${hash()}${hash()}`,
    name: "F.A.Q",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    name: "SITEMAP",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    name: "CONDITIONS",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    name: "LICENSES",
    href: "/#",
  },
];

const socialItems = [
  {
    id: `${hash()}${hash()}`,
    Icon: Facebook,
    href: "https://www.facebook.com/",
  },
  {
    id: `${hash()}${hash()}`,
    Icon: Twitter,
    href: "https://twitter.com/",
  },
  {
    id: `${hash()}${hash()}`,
    Icon: Linkedin,
    href: "https://www.linkedin.com/",
  },
  {
    id: `${hash()}${hash()}`,
    Icon: Youtube,
    href: "https://www.youtube.com/",
  },
  {
    id: `${hash()}${hash()}`,
    Icon: Instagram,
    href: "https://www.instagram.com/",
  },
  {
    id: `${hash()}${hash()}`,
    Icon: Pinterest,
    href: "https://www.pinterest.com/",
  },
];

const Footer = () => {
  return (
    <footer className="container">
      <div className="pb-[23px] pt-[81px] text-center sm:pb-[21px] sm:pt-[130px] md:text-left">
        <div className="grid-1 relative grid text-base font-bold max-[1224px]:justify-items-center max-[1224px]:gap-8 max-sm:justify-center max-sm:gap-14 md:grid-cols-2 min-[1224px]:grid-cols-[repeat(4,_minmax(0,0.23fr))]">
          <motion.svg
            initial={{ strokeDashoffset: 1576.17431640625 }}
            whileInView={{ strokeDashoffset: 3152.3486328125 }}
            animate={{
              strokeDasharray: ["1576.17431640625"],
              animationFillMode: "both",
            }}
            transition={{
              duration: 4,
              transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="1439"
            height="368"
            viewBox="0 0 1439 368"
            fill="none"
            className="min-[540px]::left-[-83.5px] absolute left-[-81px] top-[-53.5px] z-[-1] h-[197px] w-[517px] min-[540px]:top-[-307px] min-[540px]:h-[363px] min-[540px]:w-[1435px]"
          >
            <path
              d="M3.5 366C45.3333 297.5 213.9 191.2 553.5 314C893.1 436.8 1285 157.833 1438.5 3"
              stroke="url(#paint0_linear_13_66)"
              strokeOpacity="0.13"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_66"
                x1="1438.5"
                y1="3.86474"
                x2="3.5"
                y2="3.86467"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#343045" />
                <stop offset="0.348958" stopColor="#C0B7E8" />
                <stop offset="0.6875" stopColor="#8176AF" />
                <stop offset="1" stopColor="#343045" />
              </linearGradient>
            </defs>
          </motion.svg>
          <div className="flex lg:flex-1">
            <a href="/#" className="max-sm:mx-auto">
              <span className="sr-only">Hydra</span>
              <img className="h-full w-auto" src={logo} alt="Hydra logo" />
            </a>
          </div>
          <div className="hidden gap-[81px] max-[1224px]:pr-[155px] md:flex">
            <svg
              className="hidden min-[1224px]:block"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="197"
              viewBox="0 0 6 197"
              fill="none"
            >
              <path
                d="M3 196.5V0.5"
                stroke="url(#paint0_linear_13_75)"
                strokeWidth="6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_13_75"
                  x1="2.99526"
                  y1="1.42982"
                  x2="77.322"
                  y2="162.759"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#343045" />
                  <stop stopColor="#343045" />
                  <stop offset="0.348958" stopColor="#C0B7E8" />
                  <stop offset="0.6875" stopColor="#8176AF" />
                  <stop offset="0.994792" stopColor="#343045" />
                </linearGradient>
              </defs>
            </svg>
            <ul className="mb-0 list-none">
              {navigation.map(({ id, to, name }) => (
                <li key={id}>
                  <Link
                    to={to}
                    activeClass="active"
                    smooth={true}
                    offset={name === "Services" ? 80 : 0}
                    spy={true}
                    className="cursor-pointer text-base font-bold uppercase leading-10 hover:text-periwinkle"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#"
                  className="cursor-pointer text-base font-bold uppercase leading-10 hover:text-periwinkle"
                >
                  JOIN HYDRA
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden gap-[107px] md:flex">
            <svg
              className="hidden min-[1224px]:block"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="196"
              viewBox="0 0 6 196"
              fill="none"
            >
              <path
                d="M3 196V0"
                stroke="url(#paint0_linear_13_76)"
                strokeWidth="6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_13_76"
                  x1="2.99526"
                  y1="0.929815"
                  x2="77.322"
                  y2="162.259"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#343045" />
                  <stop stopColor="#343045" />
                  <stop offset="0.348958" stopColor="#C0B7E8" />
                  <stop offset="0.6875" stopColor="#8176AF" />
                  <stop offset="0.994792" stopColor="#343045" />
                </linearGradient>
              </defs>
            </svg>
            <ul className="mb-0 list-none">
              {secondNavColumn.map(({ id, name, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    className="text-base font-bold leading-10 hover:text-periwinkle"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex sm:gap-[71px]">
            <div className="hidden min-[1224px]:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="196"
                viewBox="0 0 6 196"
                fill="none"
              >
                <path
                  d="M3 196V0"
                  stroke="url(#paint0_linear_13_77)"
                  strokeWidth="6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_13_77"
                    x1="2.99526"
                    y1="0.929815"
                    x2="77.322"
                    y2="162.259"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#343045" />
                    <stop stopColor="#343045" />
                    <stop offset="0.348958" stopColor="#C0B7E8" />
                    <stop offset="0.6875" stopColor="#8176AF" />
                    <stop offset="0.994792" stopColor="#343045" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <p className="md:leading-10">SOCIALIZE WITH HYDRA</p>
              <div className="pt-[29px] sm:pt-[-1px]">
                <div className="mb-[47px] flex gap-5 sm:mb-[49px]">
                  {socialItems.map((Item) => (
                    <a
                      href={Item.href}
                      key={Item.id}
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                      className="h-8 w-8  rounded-full uppercase leading-normal transition  duration-150 ease-in-out hover:bg-black  focus:outline-none focus:ring-0"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <Item.Icon />
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="/#"
                role="button"
                className="btn-primary h-[55px] w-[295px] max-md:mx-auto min-[540px]:h-12  min-[540px]:w-[214px]"
              >
                BUILD YOUR WORLD
              </a>
            </div>
          </div>
          <motion.svg
            initial={{ strokeDashoffset: 1660.24853515625 }}
            whileInView={{ strokeDashoffset: 3320.4970703125 }}
            animate={{
              strokeDasharray: ["1660.24853515625"],
              animationFillMode: "both",
            }}
            transition={{
              duration: 2.5,
              transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="270"
            viewBox="0 0 1440 270"
            fill="none"
            className="absolute left-[-87px] top-[86px] z-[-1] h-[143px] w-[518px] min-[540px]:h-[263.989px] min-[540px]:w-[1437px] sm:left-[-83.5px] sm:top-[-44px]"
          >
            <path
              d="M1439.5 3C1315.17 14.3333 1084.71 109.757 957 215C795 348.5 543.167 194 391 97C283.5 30 55.3 -36.3 2.5 234.5"
              stroke="url(#paint0_linear_13_65)"
              strokeOpacity="0.13"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_65"
                x1="1439.5"
                y1="3.63123"
                x2="2.5"
                y2="3.63112"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#343045" />
                <stop offset="0.348958" stopColor="#C0B7E8" />
                <stop offset="0.6875" stopColor="#8176AF" />
                <stop offset="1" stopColor="#343045" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>
      <div className="pb-[89px] pt-[38px] text-center text-sm font-bold tracking-[1.82px] sm:pb-[59px] sm:pt-[49px]">
        <hr className="from-34.8958% via-68.75% mx-auto mb-[38px] h-px w-[290px] rounded border-0 bg-gradient-to-r from-[#343045] via-[#8176AF] via-[#C0B7E8] to-[#343045] to-100% max-[539px]:bg-[#8176AF] min-[540px]:mb-[49px] sm:w-11/12 min-[1280px]:w-[1269px]"></hr>
        2023 © HYDRA LANDING PAGE
        <a className="" href="/#">
          {" "}
          - BY ZINE. E. FALOUTI -{" "}
        </a>
        ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
