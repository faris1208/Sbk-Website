import cardOne from "../../../public/assets/images/card/black_air_shoe.jpg";
import cardTwo from "../../../public/assets/images/card/black_bag.jpg";
import cardThree from "../../../public/assets/images/card/black_half_shoe.jpg";
import cardFour from "../../../public/assets/images/card/body_spray.jpg";
import cardFive from "../../../public/assets/images/card/durag.jpg";
import cardSix from "../../../public/assets/images/card/fendi_palm.jpg";
import cardSeven from "../../../public/assets/images/card/gg_shoe.jpg";
import cardEight from "../../../public/assets/images/card/girl-slippers.jpg";
import first from "../../../public/assets/images/card/gucci_shoe.jpg";
import second from "../../../public/assets/images/card/hermes_bag.jpg";
import third from "../../../public/assets/images/card/lv_bag.jpg";
import fourth from "../../../public/assets/images/card/lv_one_hand.jpg";
import fifth from "../../../public/assets/images/card/ny_cap.jpg";
import sixth from "../../../public/assets/images/card/one-hand_bag.jpg";
import seventh from "../../../public/assets/images/card/pink_slippers.jpg";
import { StaticImageData } from "next/image";
import slide from "../../../public/assets/images/homepage/slides.jpg";
import perfumes from "../../../public/assets/images/homepage/perfume_bacground.jpg";
import bags from "../../../public/assets/images/homepage/lv_women_bag.jpg";

export interface Product {
  img: StaticImageData | string; 
  name: string;
  old: number;
  new: number;
  category: "new arrivals" | "best selling" | "top selling";
}

export const listCard: Product[] = [
  {
    img: cardOne,
    name: "Bvlgari Hedge Slide",
    old: 48750,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardTwo,
    name: "Bvlgari Serpenti",
    old: 52000,
    new: 48750,
    category: "best selling"
  },
  {
    img: cardThree,
    name: "Bvlgari zero1",
    old: 45000,
    new: 48750,
    category: "top selling"
  },
  {
    img: cardFour,
    name: "Bvlgari Divas' Dream",
    old: 55000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardFive,
    name: "Bvlgari Fiery",
    old: 60000,
    new: 48750,
    category: "best selling"
  },
  {
    img: cardSix,
    name: "Bvlgari Parentesi",
    old: 40000,
    new: 48750,
    category: "top selling"
  },
  {
    img: cardSeven,
    name: "Bvlgari Tubogas",
    old: 58000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardEight,
    name: "Bvlgari Aluminium",
    old: 42000,
    new: 48750,
    category: "best selling"
  },
  {
    img: first,
    name: "Bvlgari Octo",
    old: 65000,
    new: 48750,
    category: "top selling"
  },
  {
    img: second,
    name: "Bvlgari Lvcea",
    old: 53000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: third,
    name: "Bvlgari Diva",
    old: 47000,
    new: 48750,
    category: "best selling"
  },
  {
    img: fourth,
    name: "Bvlgari Bvlgari",
    old: 49000,
    new: 48750,
    category: "top selling"
  },
  {
    img: fifth,
    name: "Bvlgari Solotempo",
    old: 51000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: sixth,
    name: "Bvlgari Ergon",
    old: 44000,
    new: 48750,
    category: "best selling"
  },
  {
    img: seventh,
    name: "Bvlgari Assioma",
    old: 56000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardSeven,
    name: "Bvlgari Tubogas",
    old: 58000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardEight,
    name: "Bvlgari Aluminium",
    old: 42000,
    new: 48750,
    category: "best selling"
  },
  {
    img: first,
    name: "Bvlgari Octo",
    old: 65000,
    new: 48750,
    category: "top selling"
  },
  {
    img: second,
    name: "Bvlgari Lvcea",
    old: 53000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: third,
    name: "Bvlgari Diva",
    old: 47000,
    new: 48750,
    category: "best selling"
  },
  {
    img: fourth,
    name: "Bvlgari Bvlgari",
    old: 49000,
    new: 48750,
    category: "top selling"
  },
  {
    img: fifth,
    name: "Bvlgari Solotempo",
    old: 51000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: sixth,
    name: "Bvlgari Ergon",
    old: 44000,
    new: 48750,
    category: "best selling"
  },
  {
    img: seventh,
    name: "Bvlgari Assioma",
    old: 56000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardSeven,
    name: "Bvlgari Tubogas",
    old: 58000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: cardEight,
    name: "Bvlgari Aluminium",
    old: 42000,
    new: 48750,
    category: "best selling"
  },
  {
    img: first,
    name: "Bvlgari Octo",
    old: 65000,
    new: 48750,
    category: "top selling"
  },
  {
    img: second,
    name: "Bvlgari Lvcea",
    old: 53000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: third,
    name: "Bvlgari Diva",
    old: 47000,
    new: 48750,
    category: "best selling"
  },
  {
    img: fourth,
    name: "Bvlgari Bvlgari",
    old: 49000,
    new: 48750,
    category: "top selling"
  },
  {
    img: fifth,
    name: "Bvlgari Solotempo",
    old: 51000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: sixth,
    name: "Bvlgari Ergon",
    old: 44000,
    new: 48750,
    category: "best selling"
  },
  {
    img: seventh,
    name: "Bvlgari Assioma",
    old: 56000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "top selling"
  },
  {
    img: first,
    name: "Bvlgari Diagono",
    old: 48000,
    new: 48750,
    category: "new arrivals"
  },
];

export const slides = [
  {
    bgimage:slide,
    name:"SLIDES",
    message:"Slide into comfort and style, the perfect choice laid back luxury on any day",
    btn:"Shop Slides"
  },
  {
    bgimage:perfumes,
    name:"PERFUMES",
    message:"Make your presence unforgettable, Discover scents that tell your story",
    btn:"Shop Perfumes"
  },
  {
    bgimage:bags,
    name:"BAGS",
    message:"Carry confidence, Our bag blends function, fashion, and finesse.",
    btn:"Shop Bags"
  },
]
