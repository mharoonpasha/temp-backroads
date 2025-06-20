export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twiiter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat corporis",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat corporis",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat corporis",
  },
];

import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores velit qui porro cum recusandae ducimus eos sequi, repellendus libero. Sit est, adipisci sunt iusto explicabo tenetur ea quisquam quis.",
    country: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores velit qui porro cum recusandae ducimus eos sequi, repellendus libero. Sit est, adipisci sunt iusto explicabo tenetur ea quisquam quis.",
    country: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores velit qui porro cum recusandae ducimus eos sequi, repellendus libero. Sit est, adipisci sunt iusto explicabo tenetur ea quisquam quis.",
    country: "hong kong",
    days: 8,
    price: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores velit qui porro cum recusandae ducimus eos sequi, repellendus libero. Sit est, adipisci sunt iusto explicabo tenetur ea quisquam quis.",
    country: "kenya",
    days: 20,
    price: 3300,
  },
];
