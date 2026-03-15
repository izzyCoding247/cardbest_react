import React from 'react'
import Gift from "../../assets/gift.png"

export default function SectionTwo() {
  return (
    <section id="section2" className="flex justify-between items-center p-20">
      <div className="w-170 bg-transparent h-90">
        <h1 className="text-4xl leading-12 pb-5 ">
          Join Now & Receive <span className="text-[#ff9d00]"> ₦2,500 </span>
          Cash + Coupons!
        </h1>
        <p className="text-[1.5em] text-gray-600 w-130 mb-13">
          Sign up today as a new user to claim your ₦2,500 cash bonus plus
          coupons to jumpstart your gift card sales!
        </p>
        <a
          href="#"
          className="px-4 py-3 mt-30 text-sm border border-solid hover:bg-black hover:text-white rounded-full transition-all duration-300 "
        >
          Register Now
        </a>
      </div>
      <div className="">
        <img src={Gift} className="w-110 mr-40" alt="" />
      </div>
    </section>
  );
}
