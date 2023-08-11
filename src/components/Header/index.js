import { useState } from "react";
import { Link } from "react-scroll";
import { Dialog, Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { navigation } from "../../data";

import logo from "../../logo.svg";
import HydraTx from "./HydraTx.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-10">
      <div className="container">
        <nav
          className="flex items-center justify-between py-[25.66px] lg:py-[50px]"
          aria-label="Global"
        >
          <div className="flex gap-[11px] lg:flex-1 lg:gap-[15px]">
            <a
              href="/#"
              className="h-[59.884px] w-[69px] lg:h-[103px] lg:w-[102px]"
            >
              <span className="sr-only">Hydra</span>
              <img
                src={logo}
                className="block min-h-full min-w-full max-w-full object-contain"
                alt="Hydra Logo"
              />
            </a>
            <a
              href="/#"
              className=" h-7 w-[46px]  self-end lg:h-[46px] lg:w-[76px] lg:self-center"
            >
              <span className="sr-only">Hydra</span>
              <img
                src={HydraTx}
                className="block max-h-full min-h-full min-w-full max-w-full object-contain"
                alt="Hydra"
              />
            </a>
          </div>
          <div className="flex self-end lg:hidden">
            <button
              type="button"
              className="z-10 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  width="33"
                  height="3.71429"
                  rx="1.85714"
                  fill="url(#paint0_linear_13_83)"
                />
                <rect
                  y="22.2857"
                  width="33"
                  height="3.71429"
                  rx="1.85714"
                  fill="url(#paint1_linear_13_83)"
                />
                <rect
                  x="9"
                  y="11.1429"
                  width="24"
                  height="3.71429"
                  rx="1.85714"
                  fill="url(#paint2_linear_13_83)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_13_83"
                    x1="-8.62252e-09"
                    y1="3.46667"
                    x2="36.0395"
                    y2="3.46666"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_13_83"
                    x1="-3.90789"
                    y1="26"
                    x2="33"
                    y2="26"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_13_83"
                    x1="5.21062"
                    y1="13"
                    x2="33.0001"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C0B7E8" />
                    <stop offset="1" stopColor="#8176AF" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
          <Popover.Group className="hidden gap-[41px] pr-12 lg:flex lg:flex-1">
            {navigation.map(({ id, to, name }) => (
              <Link
                to={to}
                activeClass="active"
                smooth={true}
                offset={name === "Services" ? 80 : 0}
                spy={true}
                key={id}
                className="cursor-pointer whitespace-nowrap font-bold uppercase not-italic hover:text-periwinkle"
              >
                {name}
              </Link>
            ))}
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-[38px]">
            <Link
              to="contact-us"
              activeClass="active"
              smooth={true}
              spy={true}
              role="button"
              className="z-50 flex h-12 w-[154px] shrink-0 cursor-pointer items-center justify-center divide-[#FFF] rounded-[40px] border-2 border-solid bg-transparent text-sm  font-bold  text-white hover:border-[#afb4bb] hover:text-[#afb4bb] lg:text-xs"
            >
              CONTACT US
            </Link>
            <a
              href="/#"
              role="button"
              className="btn-primary h-12 w-[155px]"
              id="join-hydra"
            >
              JOIN HYDRA
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#302C42] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a
                href="/#"
                className="h-[59.884px] w-[69px] lg:h-[103px] lg:w-[102px]"
              >
                <span className="sr-only">Hydra</span>
                <img
                  src={logo}
                  className="block min-h-full min-w-full max-w-full object-contain"
                  alt="Hydra Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 self-end rounded-md p-2.5 text-periwinkle "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[rgba(192,183,232,0.33)]">
                <div className="space-y-2 py-6">
                  {navigation.map(({ id, name, href }) => (
                    <a
                      key={id}
                      href={href}
                      className="-mx-3 block px-3  py-2 text-base font-semibold leading-7 hover:bg-[#282c34]"
                    >
                      {name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/#"
                    className="-mx-3 block  px-3 py-2.5 text-base font-semibold leading-7 hover:bg-[#282c34]"
                  >
                    Join Hydra
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
