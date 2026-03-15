import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

export default function Header() {
  const navLink = [
    { label: "Home" },
    { label: "Sell Gift Card" },
    { label: "FAQ" },
    { label: "Download App" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center px-8">
        <a href="#">
          <div className="flex items-center justify-between gap-3">
            <img src={Logo} alt="" className="w-auto" />
            <span className="text-xl font-semibold">Besttimecards</span>
          </div>
        </a>

        <nav className="flex justify-around text-base gap-8">
          {navLink.map((navs, index) => (
            <a href="#" key={index} className="py-6 hover:text-gray-500">
              {navs.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-between items-center gap-6">
          <a href="#" className="text-sm hover:text-gray-500">
            Sign up
          </a>
          <a
            href="#"
            className={`px-4 py-2 text-sm border border-solid rounded-full transition-all duration-300 ${
              isScrolled
                ? "border-black text-black hover:bg-black hover:text-white"
                : " text-white border-white hover:bg-white hover:text-black"
            }`}
          >
            Log in
          </a>
        </div>
      </div>
    </header>
  );
}
