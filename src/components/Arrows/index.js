import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ArrowType = {
  primary:
    "h-[62px] w-[62px] bg-[linear-gradient(268deg,_#C0B7E8_0%,_#8176AF_100%)] text-[#433D60] rounded-full border-[9px] border-[rgba(14,14,14,0.32)] bg-clip-padding active:scale-90",
  basic:
    "w-[30px] h-[30px] border-white text-white border-solid border-2 bg-transparent hover:bg-gray-700 rounded-full",
};

export const SampleNextArrow = ({ type, onClick }) => {
  return (
    <button
      className={`${ArrowType[type]} absolute ${
        type === "basic" ? `right-[-25px]` : `right-[-11px] sm:right-0`
      } top-[50%] z-20 block translate-x-[0] translate-y-[-50%] cursor-pointer  select-none p-0`}
      onClick={onClick}
    >
      <ChevronRightIcon
        aria-hidden="true"
        className={
          type === "basic"
            ? "m-auto h-[22.5px] w-[22.5px] stroke-[1.8px]"
            : "m-auto h-[40px] w-[24px] stroke-[3px]"
        }
      />
    </button>
  );
};

export const SamplePrevArrow = ({ type, onClick }) => {
  return (
    <button
      className={`${ArrowType[type]} absolute ${
        type === "basic" ? `left-[-25px]` : `left-[-10px] sm:left-0`
      } top-[50%] z-20 block translate-x-[0] translate-y-[-50%] cursor-pointer  select-none p-0`}
      onClick={onClick}
    >
      <ChevronLeftIcon
        aria-hidden="true"
        className={
          type === "basic"
            ? "m-auto h-[22.5px] w-[22.5px] stroke-[1.8px]"
            : "m-auto h-[40px] w-[24px] stroke-[3px]"
        }
      />
    </button>
  );
};
