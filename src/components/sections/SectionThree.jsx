import React from 'react'

export default function SectionThree() {
  return (
    <section
      id="section3"
      className="flex justify-between items-center p-20 bg-gray-100"
    >
      <div className="">
        <p className='tracking-[.4em] text-gray-500 text-xl'>HOW TO SELL YOUR GIFT CARDS?</p>
        <p className='text-5xl mt-10 w-150 font-semibold leading-[1.3]'>Sell Your Gift Cards in 3 Easy Steps</p>
      </div>
      <div className="flex-1/2">
        <ol className="text-black text-lg list-decimal list-inside space-y-2">
          <li>Create your secure Carding account in minutes.</li>
          <li>Enter your card details and get verified.</li>
          <li>Withdraw your money instantly to your bank or wallet</li>
        </ol>
      </div>
    </section>
  );
}
