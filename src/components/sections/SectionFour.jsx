import React from "react";
import Steam from "../../assets/steam_card.png";
import Apple from "../../assets/apple_card.png";
import Google from "../../assets/google_card.png";
import PlayStation from "../../assets/playstation_card.png";
import RazerGold from "../../assets/razergold_card.png";
import Visa from "../../assets/visa_card.png";
import Sephora from "../../assets/sephora_card.png";
import Nordstrom from "../../assets/nordstrom_card.png";
import Nike from "../../assets/nike_card.png";
import AmericanExpress from "../../assets/americanexpress_card.png";
import Chime from "../../assets/chime_card.png";

export default function SectionFour() {
  const CardTypes = [
    Chime,
    Steam,
    Apple,
    PlayStation,
    Google,
    RazerGold,
    Sephora,
    Visa,
  ];
  return (
    <section id="section4" className="p-20">
      <p className="text-4xl">Large Variety of Supported Gift Cards</p>
      <div className="flex justify-between">
        <p className="text-gray-500 mt-3 text-2xl w-[35em] ">
          Our platform supports many popular gift card brands, giving you more
          choices and flexibility.
        </p>
        <div className="">
          <a
            href="#"
            className="px-4 py-3 text-sm border border-solid hover:bg-black hover:text-white rounded-full transition-all duration-300 "
          >
            View more +
          </a>
        </div>
      </div>
      <div className="grid grid-cols-4 px-20 py-20">
        {CardTypes.map((card, index) => (
          <img
            key={index}
            src={card}
            alt=""
            className="w-60 rounded-2xl border border-gray-200 mt-5"
          />
        ))}
      </div>
    </section>
  );
}
