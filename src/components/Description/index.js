import { motion } from "framer-motion";

import { isLarge } from "../../constants";
import { classNames } from "../../helpers";

const Description = ({ headline, subheading, paragraph, isPrimary }) => {
  return (
    <div
      className={classNames(
        isPrimary ? "gap-[42px] lg:flex-nowrap lg:gap-[81px]" : "gap-[42px]",
        "flex flex-wrap"
      )}
    >
      <motion.div
        initial={{ y: 0, x: isLarge ? -80 : 0, opacity: isLarge ? 0 : 1 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{
          type: "tween",
          duration: 1.2,
          delay: 0.7,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
        className={classNames(
          !isPrimary && "max-md:hidden",
          "flex-auto whitespace-nowrap text-center text-[26px] leading-4 md:text-4xl lg:text-left"
        )}
      >
        <h2 className="font-bold">{headline}</h2>
        <div
          className={classNames(
            isPrimary ? "lg:mt-[-15px]" : "lg:mt-[5px]",
            "mt-[26px] flex items-center gap-[30px] max-lg:leading-[0rem] max-sm:leading-normal"
          )}
        >
          <div className="flex-auto indent-7  font-light lg:indent-0">
            {subheading}
          </div>
          <a
            href="/#"
            className={classNames(!isPrimary && "hidden", "hover:text-white")}
          >
            <svg
              className="hidden stroke-periwinkle hover:stroke-white lg:block"
              xmlns="http://www.w3.org/2000/svg"
              width="228"
              height="100"
              viewBox="0 0 228 100"
              fill="none"
            >
              <path
                d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M157.5 50H0" strokeWidth="3" />
            </svg>
          </a>
        </div>
      </motion.div>
      <motion.p
        initial={{ y: 0, x: isLarge ? 80 : 0, opacity: isLarge ? 0 : 1 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{
          type: "tween",
          duration: 1.2,
          delay: 0.7,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
        className={classNames(
          isPrimary && "hidden",
          "text-base font-normal sm:block"
        )}
      >
        {paragraph}
      </motion.p>
    </div>
  );
};

export default Description;
