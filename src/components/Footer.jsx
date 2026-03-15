import React from "react";
import LogoWhite from "../assets/logo-white.png"

export default function Footer() {
  return (
    <footer
      className="bg-[#1d2023] p-20 text-gray-400 text-lg"
    >
      <a href="#">
        <div className="flex items-center gap-3">
          <img src={LogoWhite} alt="" className="w-auto" />
          <span className="text-xl font-semibold text-white">
            Besttimechain
          </span>
        </div>
      </a>
      <div className="flex justify-between mt-10">
        <p className="w-80">
          Your trusted gift card trading platform. Fast, secure, and reliable
          exchanges.
        </p>
        <p>
          <a href="#" className="">
            Privacy Policy
          </a>
        </p>
      </div>
      <hr className=" my-10" />
      <div className="flex justify-between">
        <p className="">© 2025 Besttimechain Platform. All rights reserved.</p>
        <p className="">Contact: support@besttimechain.com</p>
      </div>
    </footer>
  );
}
