import { useState, useEffect } from "react";
import bgImage from "../../assets/bg-0.jpg";
import bgImageOne from "../../assets/bg-1.jpg";
import Form from "../mainComponent/Form";

export default function Section1() {
  const slides = [
    {
      img: bgImage,
      title: "Got Gift Cards? Turn Them Into Cash Now",
      subtitle1: "No stress, no waiting.",
      subtitle2: "Just sell your cards and get your money fast, straight into your wallet",
    },
    {
      img: bgImageOne,
      title: "Cash Your Gift Cards Fast, Easy & Secure.",
      subtitle1: "Besttimechain is the most trusted gift card trading platform, offering good prices, fast payout and a great experience",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); 
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <section id="section1" className=" relative min-h-dvh z-20">
      <img
        src={slides[currentSlide].img}
        alt=""
        className="absolute object-cover h-full w-full inset-0"
      />
      <div className="flex items-start h-full relative py-35 px-10">
        <div className="max-w-2xl px-5 text-white">
          <h1 className="text-6xl">{slides[currentSlide].title}</h1>
          <p className="text-3xl pt-7">{slides[currentSlide].subtitle1}</p>
          <p className="text-3xl">{slides[currentSlide].subtitle2}</p>
        </div>

        <Form />
      </div>
    </section>
  );
}
