import React, { useState } from "react";
import SelectField from "./SelectField";

export default function Form() {
  const CATEGORIES = [
    { label: "iTunes", value: "itunes" },
    { label: "Amazon", value: "amazon" },
    { label: "Steam", value: "steam" },
    { label: "Razer Gold", value: "razer_gold" },
    { label: "Xbox", value: "xbox" },
    { label: "Ebay", value: "ebay" },
  ];

  const COUNTRIES = [
    { label: "United States", value: "US" },
    { label: "United Kingdom", value: "UK" },
    { label: "Canada", value: "CA" },
    { label: "Mexico", value: "MX" },
  ];

  const CARD_TYPES = [
    { label: "Physical", value: "physical" },
    { label: "E-code", value: "ecode" },
  ];

  const SPEEDS = [
    { label: "Fast", value: "fast" },
    { label: "Take your time", value: "slow" },
  ];

  const [formData, setFormData] = useState({
    category: "",
    countries: "",
    card_types: "",
    speeds: "",
    amount: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <>
      <form
        action=""
        className="h-auto w-140 border-white/10 bg-white p-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h2 className=" text-black text-xl pb-5">Check your gift card value</h2>
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Category"
            id="category"
            name="category"
            options={CATEGORIES}
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />

          <SelectField
            label="Country"
            id="country"
            name="country"
            options={COUNTRIES}
            value={formData.countries}
            onChange={(e) =>
              setFormData({ ...formData, countries: e.target.value })
            }
          />

          <SelectField
            label="Card Type"
            id="cardType"
            name="cardType"
            options={CARD_TYPES}
            value={formData.card_types}
            onChange={(e) =>
              setFormData({ ...formData, card_types: e.target.value })
            }
          />

          <SelectField
            label="Payout Speed"
            id="payoutSpeed"
            name="payoutSpeed"
            options={SPEEDS}
            value={formData.speeds}
            onChange={(e) =>
              setFormData({ ...formData, speeds: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="balance" className="text-black text-sm mb-2">
            Balance
          </label>
          <input
            type="text"
            id="balance"
            className="rounded-sm text-sm border border-gray-400 p-2 focus:border-black focus:outline-none text-gray-500 hover:border-black"
            placeholder="Please enter the card balance"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-700 transition-all duration-500 text-white p-2 mt-16 rounded-full w-full cursor-pointer"
          >
            Get Quote
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <p>Sales price</p>
          <h1 className="text-4xl font-bold">₦ 0</h1>
        </div>
      </form>
    </>
  );
}
