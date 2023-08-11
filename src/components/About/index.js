import { motion } from "framer-motion";

import Description from "../Description";

import { isLarge } from "../../constants";

import NextGenVR from "./NextGenVR.jpg";

const About = () => {
  return (
    <section>
      <div className="container pt-[59px] md:pt-[90px]">
        <Description
          headline="INTRODUCTION"
          subheading="TO HYDRA VR"
          paragraph="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
          isPrimary={true}
        />
        <div
          className="flex flex-auto  gap-[51px] pt-[37.93px] max-lg:flex-wrap sm:pt-[72px] lg:gap-[118px]"
          id="about"
        >
          <img
            className="mx-auto h-[358px] w-[336.79px] rounded-[140px_60px] shadow-white-aluminium min-[667px]:h-[557px] min-[667px]:w-[520px] min-[667px]:rounded-[240px_100px]"
            src={NextGenVR}
            alt="Next-gen PSVR headset"
            width={100}
            height={100}
          />
          <div className="relative flex flex-col justify-evenly max-lg:items-center max-lg:gap-[34px]">
            <motion.svg
              initial={{ strokeDashoffset: 1677.1822509765625 }}
              whileInView={{ strokeDashoffset: 0 }}
              animate={{
                strokeDasharray: ["1677.1822509765625"],
                animationFillMode: "both",
              }}
              transition={{
                duration: 4,
                transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="262"
              viewBox="0 0 1440 262"
              fill="none"
              className="absolute left-[-734.5px] top-[12px] z-[-1] hidden h-[352px] w-[617px]  lg:block lg:h-[256.676px] lg:w-[1449px]"
            >
              <path
                d="M1442.5 215C1387.5 104.333 1242.8 -83.7999 1104 49.0001C930.5 215 761.5 331.5 554.5 203.5C347.5 75.5001 34.5 175.5 -6.5 260"
                stroke="url(#paint0_linear_3_53)"
                strokeOpacity="0.13"
                strokeWidth="6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_53"
                  x1="-7"
                  y1="105.5"
                  x2="1443"
                  y2="89.0001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#211E2E" />
                  <stop offset="0.3125" stopColor="#C0B7E8" />
                  <stop offset="0.765625" stopColor="#8176AF" />
                  <stop offset="0.994792" stopColor="#211E2E" />
                </linearGradient>
              </defs>
            </motion.svg>
            <Description
              headline="ABOUT"
              subheading="HYDRA VR"
              paragraph="Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
          urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
          dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
          Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
          sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
          etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
          cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
          retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
          n tempor."
              isPrimary={false}
            />
            <motion.a
              initial={{
                y: 0,
                x: isLarge ? 80 : 0,
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
              href="/#"
              role="button"
              className="btn-primary h-14 w-[276px] lg:h-12 lg:w-[214px]"
            >
              LET’S GET IN TOUCH
            </motion.a>
            <motion.svg
              initial={{ strokeDashoffset: 1544.201171875 }}
              whileInView={{ strokeDashoffset: 0 }}
              animate={{
                strokeDasharray: ["1544.201171875"],
                animationFillMode: "both",
              }}
              transition={{
                duration: 2.5,
                transitionTimingFunction: "cubic-bezier(0.47, 0, 0.745, 0.715)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="219"
              viewBox="0 0 1440 219"
              fill="none"
              className="absolute left-[-741.5px] top-[302px] z-[-1] hidden h-[352px] w-[617px] lg:block lg:h-[211.75px] lg:w-[1445px]"
            >
              <path
                d="M-4.5 74.5C153.667 21.1667 504.6 -53.5 643 74.5C816 234.5 1071.5 258.5 1186.5 146C1278.5 56 1394.17 70.8333 1440.5 89.5"
                stroke="url(#paint0_linear_3_54)"
                strokeOpacity="0.13"
                strokeWidth="6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_54"
                  x1="-5"
                  y1="63"
                  x2="1462"
                  y2="62.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#343045" />
                  <stop offset="0.224242" stopColor="#C0B7E8" />
                  <stop offset="0.786458" stopColor="#8176AF" />
                  <stop offset="0.96875" stopColor="#343045" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
