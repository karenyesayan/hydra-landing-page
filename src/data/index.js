import { hash } from "../helpers";

export const navigation = [
  {
    id: `${hash()}${hash()}`,
    to: "about",
    name: "About",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    to: "services",
    name: "Services",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    to: "technologies",
    name: "Technologies",
    href: "/#",
  },
  {
    id: `${hash()}${hash()}`,
    to: "how-to",
    name: "How To",
    href: "/#",
  },
];
